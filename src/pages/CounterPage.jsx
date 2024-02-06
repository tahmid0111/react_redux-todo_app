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
  const [customValue, setCustomValue] = useState(10);
  const SetCustomAmount = (e) => {
    setCustomValue(e.target.value);
  };
  const handleCustomValue = () => {
    dispatch(setByAmount(customValue));
    setCustomValue(0);
  };
  return (
    <div>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="text-5xl font-bold text-center mb-4">{count}</div>
          <div className="flex justify-center">
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
            <div>
              <input
                type="text"
                value={customValue}
                onChange={SetCustomAmount}
              />
              <button onClick={handleCustomValue}>Set Custom Value</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterPage;
