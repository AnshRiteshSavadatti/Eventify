import { useDispatch, useSelector } from "react-redux";
import Button from "../../UI/Button";
import {
  decrementItemQuantity,
  deleteItem,
  incrementItemQuantity,
} from "./cartSlice";

function CartItem({ name, address, cost }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  function handleClick(e, name) {
    dispatch(deleteItem(name));
  }

  function ticketQuantity(name) {
    const item = items.find((item) => item.name === name);
    return item?.quantity || 0;
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6 transition duration-300 hover:shadow-lg ">
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600">{address}</p>
          <p className="text-red-600 font-medium">{cost} per ticket</p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="">
            <Button
              type="small"
              onClick={() => dispatch(decrementItemQuantity(name))}
            >
              -
            </Button>
            <span className="mx-2">{ticketQuantity(name)}</span>
            <Button
              type="small"
              onClick={() => dispatch(incrementItemQuantity(name))}
            >
              +
            </Button>
          </div>
          <Button type="primary" onClick={(e) => handleClick(e, name)}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
