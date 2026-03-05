import { useState } from "react";

export default function HomePageComponent(props) {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <h1>{props.name}</h1>
        <h1>{props.age}</h1>
        <h1>{props.gender}</h1>

        <div className="bg-blue-200 w-full h-full">
          <div className="bg-blue-500 h-100 w-100 ">
            <h1 className="text-5xl text-red-500 font-extrabold">{count}</h1>
            <div className="flex gap-5 justify-center items-center align-middle">
              <button
                className="bg-green-500 text-5xl w-15 h-15 rounded-full"
                onClick={() => setCount((prev) => prev + 1)}
              >
                +
              </button>
              <button
                className="bg-purple-500 text-5xl w-15 h-15 rounded-full"
                onClick={() => setCount((prev) => prev - 1)}
              >
                -
              </button>
            </div>
          </div>

          <HomePageComponent age={"20"} name={"chakriya"} gender={"Female"} />
        </div>
      </div>
    </>
  );
}
