import { useDispatch, useSelector } from "react-redux";
import Button from "../../UI/Button";

import {
  addItem,
  incrementItemQuantity,
  decrementItemQuantity,
} from "../cart/cartSlice";

function ShowItems({ image, name, address, cost }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  function handleClick(e, name) {
    const newItem = {
      name,
      address,
      cost,
      image,
      quantity: 1,
    };
    dispatch(addItem(newItem));
  }

  function ticketQuantity(name) {
    const item = items.find((item) => item.name === name);
    return item?.quantity || 0;
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-4 transition duration-300 hover:shadow-lg">
      <div className="flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="w-60 h-80 object-cover rounded-md mb-4 "
        />
      </div>
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-600">{address}</p>
      <p className="mt-2 text-red-600 font-medium text-xl">
        &#8377;{cost} per ticket
      </p>
      <div className="flex justify-between mx-2 my-2">
        <Button type="small" onClick={(e) => handleClick(e, name)}>
          Add To Cart
        </Button>
        {ticketQuantity(name) > 0 && (
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
        )}
      </div>
    </div>
  );
}

export default ShowItems;
