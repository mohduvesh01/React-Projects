import { FaLock } from "react-icons/fa6";
const Input = () => {
  return (
    <div>
      <div className="input-wrapper">
        <input
          type="email"
          className="login-input"
          placeholder="Email address"
          required
        />
        <i className="material-symbols-outlined">mail</i>
      </div>
      <div className="input-wrapper">
        <input
          type="password"
          className="login-input"
          placeholder="Password"
          required
        />
        <i className="material-symbols-outlined">
          <FaLock />
        </i>
      </div>
    </div>
  );
};

export default Input;
