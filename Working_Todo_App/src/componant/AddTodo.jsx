import { useRef } from "react";
import styles from "./AddTodo.module.css";
import { IoMdAdd } from "react-icons/io";

const AddTodo = ({ onNewItem }) => {
  const inputRef = useRef();
  const dateRef = useRef();

  const handleonAddButton = (event) => {
    event.preventDefault();
    const itemName = inputRef.current.value;
    const date = dateRef.current.value;
    inputRef.current.value = "";
    dateRef.current.value = "";
    onNewItem(itemName, date);
  };

  return (
    <>
      <form onSubmit={handleonAddButton}>
        <input
          type="text"
          ref={inputRef}
          placeholder="Enter your task"
          style={{ marginRight: "10px" }}
          className={styles.addTodo}
        />
        <input
          type="date"
          ref={dateRef}
          placeholder="Enter your task"
          style={{ marginRight: "10px" }}
        />
        <button className="btn btn-success">
          <IoMdAdd />
        </button>
      </form>
    </>
  );
};
export default AddTodo;
