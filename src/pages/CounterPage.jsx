import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  setByAmount,
} from "../redux/state/counter/CounterSlice";

const CounterPage = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  // for adding custom numbers
  const [customValue, setCustomValue] = useState(0);
  const SetCustomAmount = (e) => {
    setCustomValue(e.target.value);
  };
  const handleCustomValue = () => {
    dispatch(setByAmount(customValue));
    setCustomValue(0);
  };
  return (
    <div>
      <div className="grid grid-cols-12 h-screen bg-gray-300 px-20">
        <div className="col-span-12">
          <div className="grid grid-cols-12 bg-white my-10 mx-20 rounded-lg">
            <div className="col-span-12 mx-auto py-5">
              <h1 className="text-4xl font-bold text-blue-500">Counter App</h1>
            </div>
            <div className="col-span-12 mx-auto py-5">
              <h1 className="text-4xl font-bold">{count}</h1>
            </div>
            <div className="col-span-12 mx-auto py-5">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mr-4"
                onClick={() => dispatch(increment())}>
                Increment
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg"
                onClick={() => dispatch(decrement())}>
                Decrement
              </button>
            </div>
            <div className="col-span-12">
              <div className="grid grid-cols-12">
                <div className="col-span-4 text-center mx-auto">
                  <input
                    className="block input input-bordered input-secondary w-[150px]"
                    type="text"
                    value={customValue}
                    onChange={SetCustomAmount}
                  />
                  <button
                    className="btn btn-secondary my-5"
                    onClick={handleCustomValue}>
                    Set Custom Value
                  </button>
                </div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterPage;
