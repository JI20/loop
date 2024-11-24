import { Link, useLocation } from "react-router-dom";
import MapIcon from "../../assets/MapIcon";
import RocketIcon from "../../assets/RocketIcon";
import SocialIcon from "../../assets/SocialIcon";
import { useState, useEffect } from "react";

export const Navigation = () => {
  const location = useLocation();
  const [activePage, setActivePage] = useState("/map");

  useEffect(() => {
    setActivePage(location.pathname);
  }, [location]);

  return (
    <>
      {location.pathname !== "/" && (
        <div
          className="fixed z-2000 bottom-0 left-0 h-[54px] 
    w-screen bg-white flex justify-between items-center px-[62px]"
        >
          <Link to="/map">
            <MapIcon
              className="w-[30px]"
              color={activePage === "/map" ? "#0065BD" : "#000000"}
            />
          </Link>
          <Link to="/explore">
            <RocketIcon
              className="w-[30px]"
              color={activePage === "/explore" ? "#0065BD" : "#000000"}
            />
          </Link>
          <Link to="/friends">
            <SocialIcon
              className="w-[42px]"
              color={activePage === "/friends" ? "#0065BD" : "#000000"}
            />
          </Link>
        </div>
      )}
    </>
  );
};
