import styles from "./Button.module.css";

const Buttons = () => {
  const BtnCntainer = [
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
      {BtnCntainer.map((btn) => {
        return <button className={styles.btn}>{btn}</button>;
      })}
    </div>
  );
};
export default Buttons;
