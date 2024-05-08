import { useState } from "react";

export default function Button() {
  const [val, setValue] = useState("");

  function getValue(e) {
    e.preventDefault();
    const buttonValue = e.target.innerText;
    setValue(val + buttonValue);

    if (buttonValue == "=") {
     setValue(eval(val))
    } else if (buttonValue == "C") {
      setValue("");
    } else if (buttonValue == "del") {
      setValue(val.slice(0, -1));
    } else {
      setValue(val + buttonValue);
    }
   
  }

  console.log(val);
  let data = [
    "C",
    "del",
    "%",
    "*",
    "7",
    "8",
    "9",
    "-",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "=",
    "0",
  ];
  return (
    <>
      <input type="text" value={val} />
      {data.map((item, index) => {
        return (
          <button key={index} onClick={getValue}>
            {item}
          </button>
        );
      })}
    </>
  );
}