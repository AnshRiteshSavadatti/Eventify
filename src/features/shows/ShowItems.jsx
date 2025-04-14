import { useDispatch } from "react-redux";
import Button from "../../UI/Button";

import { addItem } from "../cart/cartSlice";

function ShowItems({ image, name, address, cost }) {
  const dispatch = useDispatch();

  function handleClick(e, name) {
    const newItem = {
      name,
      address,
      cost,
      image,
    };
    dispatch(addItem(newItem));
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
      <p className="mt-2 text-red-600 font-medium">{cost} per ticket</p>
      <Button type="primary" onClick={(e) => handleClick(e, name)}>
        Add To Cart
      </Button>
    </div>
  );
}

export default ShowItems;
