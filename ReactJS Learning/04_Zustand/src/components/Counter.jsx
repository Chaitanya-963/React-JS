import { useCounterStore } from "../store/counterStore.js";
import CounterValue from "./CounterValue.jsx";

const Counter = () => {
  const { increase, decrease, reset } = useCounterStore();

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl w-80 mx-auto transition-all duration-300 hover:shadow-2xl">
      <h2 className="text-sm font-semibold tracking-wider text-slate-400 uppercase mb-2">
        Counter Engine
      </h2>

      {/* Dynamic Count Display */}
      <h3
        className={`text-6xl font-extrabold tracking-tight my-4 font-mono transition-colors duration-200 ${
          CounterValue > 0
            ? "text-emerald-400"
            : CounterValue < 0
              ? "text-rose-500"
              : "text-white"
        }`}
      >
        {CounterValue}
      </h3>

      {/* Control Buttons Container */}
      <div className="flex items-center gap-3 mt-4 w-full">
        <button
          onClick={decrease}
          aria-label="Decrease count"
          className="flex-1 py-3 px-4 bg-slate-800 text-white rounded-xl font-medium border border-slate-700 hover:bg-slate-700 hover:border-slate-600 active:scale-95 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xl"
        >
          ➖
        </button>

        <button
          onClick={increase}
          aria-label="Increase count"
          className="flex-1 py-3 px-4 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-500 active:scale-95 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-xl shadow-lg shadow-indigo-600/20"
        >
          ➕
        </button>
      </div>

      {/* Reset Control */}
      <button
        onClick={reset}
        aria-label="Reset counter"
        className="mt-4 text-xs font-medium text-slate-500 hover:text-slate-300 flex items-center gap-1.5 px-3 py-1.5 rounded-md hover:bg-slate-800/50 transition-colors duration-150"
      >
        <span>🔄️</span> Reset Counter
      </button>
    </div>
  );
};

export default Counter;
