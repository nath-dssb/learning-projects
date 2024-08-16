"use client";

import React, { useState } from "react";

export default function CartCounter() {
    const [counter, setCounter] = useState(0);
  return (
    <>
      <div className=" text-9xl">{counter}</div>
      <div className=" flex">
        <button
          className=" flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
            onClick={() => setCounter(counter + 1)}
        >
          +1
        </button>
        <button
          className=" flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => setCounter(counter - 1)}
        >
          -1
        </button>
      </div>
    </>
  );
};