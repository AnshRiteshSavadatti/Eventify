import CartItem from "./CartItem";

const items = {
  name: "Concert",
  address: "Railway Ground, Hubballi",
  cost: 98,
};

function Cart() {
  return (
    <div>
      <CartItem name={items.name} address={items.address} cost={items.cost} />
    </div>
  );
}

export default Cart;
