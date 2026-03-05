import React from "react";

export default function ChildComponent({ name, age, gender }) {
  // const [data, setData]= {
  //   id : 1,
  //   name : "chakriya",
  //   gender : "female"
  // }
  return (
    <div className="bg-blue-300 w-full max-h-full">
      <div className="bg-blue-400 items-center text-5xl font-extrabold">
        <h1 className="bg-pink-400 items-center text-5xl font-extrabold">
          This is Child Component
        </h1>

        <h1>{name}</h1>
        <h1>{age}</h1>
        <h1>{gender}</h1>
      </div>
    </div>
  );
}
