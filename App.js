import React from "react";
import "./styles.css";

function App() {
  const [input, setInput] = React.useState("");
  const [box, setBox] = React.useState(0);
  const [selected, setSelected] = React.useState(0);
  const [isColor, setIsColor] = React.useState(false);
  const [obj, setObj] = React.useState("");

  const doReset = () => {
    setBox(0);
    setSelected([]);
    setIsColor(false);
    setObj("");
  };
  const handleKey = (event) => {
    if (event.key === "Enter") {
      const val = input;
      doReset();
      //11,5,true,{"1":"A","2":"B","4":"C"}
      if (val.toString().includes(",")) {
        let arr = val.split(",");
        setBox(Array.from(Array(Number(arr[0])).keys()));
        if (arr[1]) {
          setSelected(arr[1]);
        }
        if (arr[2]) {
          setIsColor(arr[1]);
        }
        if (arr[3]) {
          let object = val.substr(val.indexOf("{"), val.length - 1);
          setObj(JSON.parse(object));
        }
      } else {
        setBox(Array.from(Array(Number(val)).keys()));
      }
    }
  };

  const getColor = (num, i) => {
    if (!isColor && i % 2 === 0 && i <= selected) {
      return "red";
    } else if (isColor) {
      return "red";
    } else {
      return "";
    }
  };

  const getCharacter = (num, i) => {
    return obj ? obj[String(i)] : "";
  };

  return (
    <>
      <div>
        <input
          onKeyPress={handleKey}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div
        style={{
          height: "100px",
          width: "100%"
        }}
      >
        {box?.length &&
          box.map((num, i) => {
            return (
              <React.Fragment>
                <span
                  key={num}
                  style={{
                    width: "16px",
                    height: "16px",
                    border: "1px solid black",
                    backgroundColor: `${getColor(num, i)}`,
                    display: "inline-block"
                  }}
                >
                  {getCharacter(num, i)}
                </span>
                {i % 4 === 0 && i !== 0 && <div></div>}
              </React.Fragment>
            );
          })}
      </div>
    </>
  );
}

export default App;
