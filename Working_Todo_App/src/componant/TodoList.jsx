import Items from "./Items";
const TodoList = ({ itemName, onDelete }) => {
  return (
    <>
      {itemName.map((item, index) => {
        return (
          <div key={index}>
            <Items itemName={item.name} date={item.date} onDelete={onDelete} />
          </div>
        );
      })}
    </>
  );
};
export default TodoList;
