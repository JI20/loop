import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <div className="absolute bottom-0 left-0 h-[50px] w-screen bg-white flex justify-between items-center px-32">
      <Link to="/">Map</Link>
      <Link to="/explore">Explore</Link>
      <Link to="/friends">Friends</Link>
    </div>
  );
};
