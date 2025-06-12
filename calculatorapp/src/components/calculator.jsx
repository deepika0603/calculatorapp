import { useState } from "react";

export default function Calculator() {
  const buttons = [7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "*", "C", 0, "=", "/"];
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    if (e.target.tagName === "BUTTON") {
      if (e.target.value === "C") {
        setResult("");
        setInput("");
      } else if (e.target.value === "=") {
        if (input === "") {
          setResult("Error");
        } else {
          setResult(eval(input));
        }
      } else {
        setInput((prevVal) => prevVal + e.target.value);
      }
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          width: "500px",
          gap: "15px",
        }}
      >
        <h1>React Calculator</h1>
        <input type="text" defaultValue={input} readOnly />
        <div style={{ color: "grey", fontSize: "25px" }}>{`${result}`}</div>
        <div
          style={{
            display: "flex",
            gap: "25px",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "350px"
          }}
          onClick={handleClick}
        >
          {buttons.map((item, index) => (
            <button
              style={{
                padding: "10px",
                height: "60px",
                width: "60px",
                border: "2px solid black",
                borderRadius: "10px",
              }}
              key={`${item}_${index}`}
              value={item}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}