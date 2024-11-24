import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const location = useLocation()
  console.log(location.pathname)
  return (
    <>
    {(location.pathname !== "/") &&
    <div
      className="fixed z-2000 bottom-0 left-0 h-[50px] 
    w-screen bg-white flex justify-between items-center px-32"
    >
      <Link to="/">Map</Link>
      <Link to="/explore">Explore</Link>
      <Link to="/friends">Friends</Link>
    </div>}
    </>
  );
};
