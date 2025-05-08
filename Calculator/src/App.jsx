import { use } from "react";
import Buttons from "../componants/Buttons";
import Display from "../componants/Display";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [calVal, setcalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setcalVal("");
    } else if (buttonText === "=") {
      setcalVal(eval(calVal));
    } else {
      setcalVal(calVal + buttonText);
    }
  };
  return (
    <>
      <center>
        <div className={styles.Calculator}>
          <Display displayValue={calVal}></Display>
          <Buttons onButtonClick={onButtonClick}></Buttons>
        </div>
      </center>
    </>
  );
}

export default App;
