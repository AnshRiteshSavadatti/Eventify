import { useSelector } from "react-redux";
import Button from "../../UI/Button";

function CartOverview() {
  const totalCartPrice = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.cost * item.quantity, 0)
  );
  const totalCartItems = useSelector((state) =>
    state.cart.items.reduce((sum, acc) => sum + acc.quantity, 0)
  );

  return (
    <div className="flex justify-between items-center px-6 bg-stone-800 text-white">
      {totalCartItems > 0 && (
        <>
          <p>{totalCartItems} items</p>
          <p>Total Price : {totalCartPrice}$</p>
          <Button to="/cart" type="secondary">
            Go to Cart 🛒
          </Button>
        </>
      )}
    </div>
  );
}

export default CartOverview;
