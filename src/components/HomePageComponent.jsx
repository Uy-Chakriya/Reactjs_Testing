import { useState } from "react";

export default function HomePageComponent({
  name = "name",
  age = "",
  gender = "",
}) {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-auto flex flex-col items-center justify-center p-10">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center border border-blue-100">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Hello world, {name}!
        </h2>

        <p className="text-gray-600 mb-6">
          Age: {age}
          Gender: {gender}
        </p>

        <div className="bg-gray-50 rounded-xl p-8 mb-6">
          <h1 className="text-7xl font-black text-indigo-600 mb-6 transition-all transform hover:scale-110">
            {count}
          </h1>

          <div className="flex gap-4 justify-center">
            <button
              className="bg-red-500 hover:bg-red-600 text-white text-2xl w-14 h-14 rounded-full shadow-lg transition-all active:scale-90"
              onClick={() => setCount((prev) => prev - 1)}
            >
              {" "}
              -
            </button>

            <button
              className="bg-green-500 hover:bg-green-600 text-white text-2xl w-14 h-14 rounded-full shadow-lg transition-all active:scale-90"
              onClick={() => setCount((prev) => prev + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
