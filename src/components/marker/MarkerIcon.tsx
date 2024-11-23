import { memo, useEffect, useRef, useState } from "react";

export const MarkerIcon = memo((props: any) => {
  const { event } = props;
  const [openDetail, setOpenDetail] = useState(false);
  const markerRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: any) => {
    if (markerRef.current && !markerRef.current.contains(event.target)) {
      setOpenDetail(false);
    }
  };

  const handleClick = () => {
    if (!openDetail) {
      setOpenDetail(true);
    }
  };

  useEffect(() => {
    if (openDetail) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDetail]);
  return (
    <div className="w-full h-full">
      <div
        className={`${
          openDetail
            ? "w-[250px] rounded-[18px] bg-white"
            : "w-[40px] h-[40px] rounded-full bg-blue"
        } border-black`}
        onClick={() => {
          handleClick();
        }}
        ref={markerRef}
      >
        {openDetail && (
          <div className="z-[20] full w-full px-4 py-3 flex flex-col justify-between">
            <div>
              <h1 className="font-['Poppins'] font-bold text-xl">
                {event.name}
              </h1>
              <p className="text-l">
                <span className="text-orange">@{event.host}</span>
              </p>
            </div>
            <div>
              <p>{event.description}</p>
              <button className="bg-blue px-7 py-1 rounded-full text-white">
                Join!
              </button>
              <div className="flex justify-between w-full">
                <p>
                  {event.participants}/{event.max_number_of_participants}
                </p>
                <p>{event.start_time}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});
