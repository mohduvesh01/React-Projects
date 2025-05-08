import "./App.css";
import SocialLogin from "./Components/SocialLogin";
import Seperator from "./Components/Seperator";
import Input from "./Components/Input";
import Forget from "./Components/Forget";
import LogInBtn from "./LogInBtn";
import SignUpBtn from "./Components/SignUpBtn";
function App() {
  return (
    <>
      <center>
        <div className="login-container">
          <h2 className="login">Login</h2>
          <SocialLogin></SocialLogin>
          <Seperator></Seperator>
          <form action="#" className="login-form">
            <Input></Input>
            <Forget></Forget>
            <LogInBtn></LogInBtn>
            <SignUpBtn></SignUpBtn>
          </form>
        </div>
      </center>
    </>
  );
}

export default App;
