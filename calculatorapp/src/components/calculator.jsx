import { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const buttons = [7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "*", "C", 0, "=", "/"];

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "=") {
      try {
        setResult(eval(input)); 
      } catch {
        setResult("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div
      style={{ textAlign: "center", marginTop: "50px", paddingLeft: "300px" }}
    >
      <h1>React Calculator</h1>
      <input
        value={input}
        readOnly
        style={{ fontSize: "24px", width: "200px", textAlign: "right" }}
      />
      <div style={{ fontSize: "20px", color: "gray", margin: "10px" }}>
        {result}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 60px)",
          gap: "10px",
          justifyContent: "center",
          paddingLeft: "110px",
        }}
      >
        {buttons.map((btn, idx) => (
          <button
            key={idx}
            onClick={() => handleClick(btn)}
            style={{
              height: "60px",
              fontSize: "20px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}
