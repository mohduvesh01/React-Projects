import { MdDeleteForever } from "react-icons/md";
const Items = ({ itemName, date, onDelete }) => {
  return (
    <>
      <div className="container text-center" style={{ marginTop: "20px" }}>
        <div className="row g-3 mb-3">
          <div className="col-5">{itemName}</div>
          <div className="col-3">{date}</div>
          <div className="col-3">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => onDelete({ name: itemName })}
            >
              <MdDeleteForever />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Items;
