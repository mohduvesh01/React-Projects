import styles from "./Buttons.module.css";
const Buttons = ({ onButtonClick }) => {
  const btns = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.calBtn}>
      {btns.map((btn) => {
        return (
          <button
            className={styles.btn}
            onClick={() => {
              onButtonClick(btn);
            }}
          >
            {btn}
          </button>
        );
      })}
    </div>
  );
};
export default Buttons;
