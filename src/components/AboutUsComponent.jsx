import { NavLink } from "react-router-dom";
import ChildComponent from "./ChildComponent";

export default function AboutUsComponent() {
  return (
    <div className="bg-amber-200 w-full max-h-full">
      <div className="bg-pink-500 items-center text-5xl font-extrabold">
        <p>This is AboutUsComponent Page</p>
      </div>
    </div>
  );
}
