import { useState } from "react";
export const MarkerIcon = () => {
  const [openDetail, setOpenDetail] = useState(false);

  return (
    <div className="w-full h-full">
      <div
        className={`${
          openDetail
            ? "w-[250px] h-[120px] rounded-[18px]"
            : "w-[40px] h-[40px] rounded-full"
        } bg-white border-black transition-all duration-75`}
        onClick={() => {
          setOpenDetail((state) => !state);
        }}
      >
        {openDetail && (
          <div className="h-full w-full px-4 py-3 flex flex-col justify-between">
            <div>
              <h1 className="font-['Poppins'] font-bold text-xl">Basketball</h1>
              <p className="text-l">
                <span className="text-orange">@Jonas</span> wants to play
                Basketball!
              </p>
            </div>
            <div>
              <button className="bg-blue px-7 py-1 rounded-full text-white">
                Join!
              </button>
              <div className="flex justify-between w-full">
                <p>3/5</p>
                <p>in 30 min</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
