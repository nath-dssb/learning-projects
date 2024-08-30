"use client";

import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from '../../store/index';
import { addOne, initCounterState, resetCounter, subsOne } from "@/store/counter/counterSlice";

interface Props {
  value?: number;
}

export interface CounterResponse {
  method: string;
  count: number;
}

const getApiCounter = async () => {
  const data = await fetch('/api/counter').then( res => res.json());

  return data as CounterResponse;
}

export default function CartCounter({ value = 0 }: Props) {

      const count = useAppSelector( state => state.counter.count );
      const dispatch = useAppDispatch();

      // useEffect(() => {
      //   dispatch( initCounterState(value))
      // }, [dispatch, value]);

      useEffect(() => {
        getApiCounter()
          .then( ({ count }) => dispatch( initCounterState(count) ))
      }, [dispatch]);

    //const [counter, setCounter] = useState(0);
  return (
    <>
      <div className=" text-9xl">{ count }</div>
      <div className=" flex">
        <button
          className=" flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
            onClick={() => dispatch( addOne())}
        >
          +1
        </button>
        <button
          className=" flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => dispatch( subsOne() )}
        >
          -1
        </button>
      </div>
    </>
  );
};