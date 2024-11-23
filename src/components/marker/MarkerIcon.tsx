import { useState } from "react";
export const MarkerIcon = () => {
  const [openDetail, setOpenDetail] = useState(false);

  return (
    <div className="w-full h-full">
      <div
        className={`${
          openDetail
            ? "w-[90px] h-[40px] rounded-4"
            : "w-[40px] h-[40px] rounded-full"
        } bg-white border-black border-[2px]`}
        onClick={() => {
          setOpenDetail((state) => !state);
        }}
      >
        {openDetail && <h1>I'm open!</h1>}
      </div>
    </div>
  );
};
