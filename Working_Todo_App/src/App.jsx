import Heading from "./componant/Heading";
import "./App.css";
import AddTodo from "./componant/AddTodo";
import TodoList from "./componant/TodoList";
import Container from "./componant/Container";
import { useState } from "react";
import WelcomeMessage from "./componant/WelcomeMessage";
function App() {
  const inititemNames = [
    { name: "Bread and Butter", date: "2023-10-19" },
    { name: "coffee", date: "2023-10-19" },
    { name: "milk", date: "2023-10-19" },
  ];

  const [itemNames, setItemList] = useState(inititemNames);

  const handleNewItem = (itemName, itemdueDate) => {
    console.log(`New item added: ${itemName} with due date: ${itemdueDate}`);
    const newTodoItems = [...itemNames, { name: itemName, date: itemdueDate }];
    setItemList(newTodoItems);
  };

  const handleondelete = (item) => {
    const newItems = itemNames.filter((itemName) => {
      return itemName.name !== item.name;
    });
    setItemList(newItems);
  };

  return (
    <>
      <center>
        <Container className="container">
          <Heading></Heading>
          <AddTodo onNewItem={handleNewItem}></AddTodo>
          {itemNames.length === 0 && <WelcomeMessage></WelcomeMessage>}
          <TodoList itemName={itemNames} onDelete={handleondelete}></TodoList>
        </Container>
      </center>
    </>
  );
}

export default App;
