import styles from "./App.module.css";
import Buttons from "./componants/Buttons";
import Display from "./componants/Display";

function App() {
  return (
    <center>
      <div className={styles.Calculator}>
        <Display></Display>
        <Buttons></Buttons>
      </div>
    </center>
  );
}

export default App;
