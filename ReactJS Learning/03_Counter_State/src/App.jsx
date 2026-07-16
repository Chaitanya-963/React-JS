import { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState();

  // Common reusable style objects to keep the code clean
  const flexCenter = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const baseButton = {
    cursor: "pointer",
    padding: "10px 20px",
    fontWeight: "600",
    fontSize: "14px",
    border: "none",
    borderRadius: "8px",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    transition: "all 0.2s ease",
  };

  return (
    <div
      style={{
        ...flexCenter,
        minHeight: "100vh",
        backgroundColor: "#0f172a",
        color: "#f8fafc",
        fontFamily: "system-ui, -apple-system, sans-serif",
        padding: "24px",
      }}
    >
      {/* Title */}
      <h1
        style={{
          fontSize: "32px",
          fontWeight: "800",
          letterSpacing: "0.1em",
          margin: "0 0 32px 0",
          background: "linear-gradient(to right, #22d3ee, #3b82f6)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textTransform: "uppercase",
        }}
      >
        Counter
      </h1>

      {/* Main Display Card */}
      <div
        style={{
          ...flexCenter,
          backgroundColor: "#1e293b",
          border: "1px solid #334155",
          borderRadius: "16px",
          padding: "32px 48px",
          marginBottom: "32px",
          minWidth: "240px",
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
        }}
      >
        <span
          style={{
            fontSize: "12px",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "#94a3b8",
            fontWeight: "600",
            marginBottom: "8px",
          }}
        >
          Current Count
        </span>
        <div
          style={{
            fontSize: "64px",
            fontWeight: "900",
            color: "#ffffff",
            lineHeight: "1",
          }}
        >
          {count}
        </div>
      </div>

      {/* Control Buttons */}
      <div style={{ display: "flex", gap: "12px", marginBottom: "32px" }}>
        <button
          onClick={() => setCount((prevCount) => prevCount + 1)}
          style={{
            ...baseButton,
            backgroundColor: "#0891b2",
            color: "#ffffff",
          }}
        >
          Increase
        </button>
        <button
          onClick={() =>
            setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : prevCount))
          }
          style={{
            ...baseButton,
            backgroundColor: "#475569",
            color: "#ffffff",
          }}
        >
          Decrease
        </button>
        <button
          onClick={() => setCount((prevCount) => prevCount * 0)}
          style={{
            ...baseButton,
            backgroundColor: "#e11d48",
            color: "#ffffff",
          }}
        >
          Reset
        </button>
      </div>

      {/* Input Action Area */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          backgroundColor: "rgba(30, 41, 59, 0.5)",
          padding: "12px",
          borderRadius: "12px",
          border: "1px solid rgba(51, 65, 85, 0.6)",
        }}
      >
        <input
          type="number"
          value={value}
          placeholder="Enter a value"
          onChange={(e) => setValue(Number(e.target.value))}
          style={{
            width: "200px",
            backgroundColor: "#0f172a",
            border: "1px solid #334155",
            borderRadius: "8px",
            padding: "8px",
            color: "#ffffff",
            textAlign: "start",
            fontWeight: "600",
            fontSize: "14px",
            outline: "none",
          }}
        />
        <button
          onClick={() => {
            setCount(Number(value));
            setValue(0);
          }}
          style={{
            ...baseButton,
            background: "linear-gradient(to right, #2563eb, #0891b2)",
            color: "#ffffff",
            padding: "8px 16px",
          }}
        >
          Set to {value}
        </button>
      </div>
    </div>
  );
};

export default App;
