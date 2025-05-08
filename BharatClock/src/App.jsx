import ClockSlogan from "./Componants/ClockSlogan";
import ClockHeading from "./Componants/ClockHeading";
import CurrentTime from "./Componants/CurrentTime";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="AppName">
      <center>
        <ClockHeading />
        <ClockSlogan />
        <CurrentTime />
      </center>
    </div>
  );
}
export default App;
