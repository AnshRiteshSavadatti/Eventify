import { useDispatch } from "react-redux";
import Button from "../../UI/Button";
import { deleteItem } from "./cartSlice";

function CartItem({ name, address, cost }) {
  const dispatch = useDispatch();

  function handleClick(e, name) {
    dispatch(deleteItem(name));
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6 transition duration-300 hover:shadow-lg ">
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600">{address}</p>
          <p className="text-red-600 font-medium">{cost} per ticket</p>
        </div>
        <Button type="primary" onClick={(e) => handleClick(e, name)}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default CartItem;
