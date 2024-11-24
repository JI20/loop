import { memo, useEffect, useRef, useState } from "react";
import { categoriesColors } from "../../config/categories";
import { Link } from "react-router-dom";

export const MarkerIcon = memo((props: any) => {
  const { event } = props;
  const [openDetail, setOpenDetail] = useState(false);
  const markerRef = useRef<HTMLDivElement>(null);
  const [confirmModal, setConfirmModal] = useState(false);

  const handleClickOutside = (event: any) => {
    if (markerRef.current && !markerRef.current.contains(event.target)) {
      setOpenDetail(false);
      setConfirmModal(false);
    }
  };

  const handleClick = () => {
    if (!openDetail) {
      setOpenDetail(true);
    }
  };

  const color = categoriesColors.find((c) => {
    return event.category === c.name;
  })?.color;

  useEffect(() => {
    if (openDetail) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDetail]);
  return (
    <div ref={markerRef}>
      {!confirmModal ? (
        <div
          className={`w-full h-full flex ${
            openDetail ? "border-black border-[2px]" : ""
          }`}
        >
          <div
            className={`${
              openDetail
                ? "w-[300px] h-[135px] bg-white"
                : `w-[40px] h-[40px] rounded-full bg-white border-${color} border-[3px]`
            }`}
            onClick={() => {
              handleClick();
            }}
          >
            {openDetail ? (
              <div className="w-full px-4 py-3 flex flex-col justify-between">
                <div>
                  <h1 className="font-bold text-xl max-h-[30px] overflow-y-hidden">
                    {event.name}
                  </h1>
                  <p className="text-l">
                    <span className="text-orange">@{event.host}</span>
                  </p>
                  <p className="pb-[12px]">{event.description}</p>
                </div>
                <div>
                  <div className="flex justify-between w-full">
                    <p>
                      {event.participants}/{event.max_number_of_participants}
                    </p>
                    <p>{event.start_time}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex justify-center items-center h-full">
                <div className={`bg-${color} rounded-full w-[20px] h-[20px]`} />
              </div>
            )}
          </div>
          {openDetail && (
            <div
              onClick={() => {
                setConfirmModal(true);
              }}
              className="w-[40px] bg-blue h-fill flex items-center justify-center"
            >
              <p>
                <span className="font-semibold text-2xl text-white">&gt;</span>
              </p>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-blue w-[340px] h-[135px] p-3 border-black border-[2px] flex flex-col justify-between p-2">
          <h1 className="text-white text-xl font-semibold">
            Wanna join the {event.name}?
          </h1>
          <div className="flex justify-between">
            <button
              className="border-white hover:bg-white hover:text-black border-[2px] px-4 py-1 text-l text-white"
              onClick={() => {
                setConfirmModal(false);
              }}
            >
              Cancel
            </button>
            <Link
              to={`/event/${event.id}`}
              className="border-white hover:bg-blue-mid-light hover:border-blue-mid-light border-[2px] px-4 py-1 text-l bg-white text-black"
            >
              Join
            </Link>
          </div>
        </div>
      )}
    </div>
  );
});
