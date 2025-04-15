import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import Button from "../../UI/Button";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

function Cart() {
  const items = useSelector((state) => state.cart.items);

  const username = useSelector((state) => state.user.userName);

  function handleBillPayment(e) {
    e.preventDefault();

    const doc = new jsPDF();
    const imageUrl = "/Eventify.png"; // relative to public

    fetch(imageUrl)
      .then((res) => res.blob())
      .then((blob) => {
        const reader = new FileReader();
        reader.onloadend = function () {
          const base64data = reader.result;

          // 📌 Add image at top-right corner
          doc.addImage(base64data, "PNG", 150, 10, 40, 20);

          // 📝 Title
          doc.setFontSize(18);
          doc.text(`${username}'s Tickets and Bill`, 20, 20);

          if (items.length > 0) {
            const tableData = items.map((item, idx) => [
              idx + 1,
              item.name,
              item.address,
              `₹${item.cost}`,
              item.quantity,
              `₹${item.cost * item.quantity}`,
            ]);

            autoTable(doc, {
              head: [
                ["#", "Name", "Address", "Cost", "Quantity", "Total Cost"],
              ],
              body: tableData,
              startY: 35,
              styles: {
                cellPadding: 3,
                fontSize: 10,
                overflow: "linebreak",
              },
              columnStyles: {
                0: { cellWidth: 10 }, // #
                1: { cellWidth: 40 }, // Name
                2: { cellWidth: 50 }, // Address
                3: { cellWidth: 20 }, // Cost
                4: { cellWidth: 20 }, // Quantity
                5: { cellWidth: 30 }, // Total Cost
              },
            });

            const total = items.reduce(
              (acc, item) => acc + item.cost * item.quantity,
              0
            );

            doc.setFontSize(14);
            doc.text(
              `Grand Total: ₹${total}`,
              20,
              doc.lastAutoTable.finalY + 10
            );
          } else {
            doc.text("Cart is empty.", 20, 35);
          }

          doc.save(`${username}_bill.pdf`);
        };
        reader.readAsDataURL(blob);
      })
      .catch((error) => {
        console.error("Error loading image:", error);
      });
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Your Cart</h1>
      {items.length > 0 ? (
        <>
          <div className="flex flex-col gap-8">
            {items.map((item) => (
              <CartItem
                name={item.name}
                address={item.address}
                cost={item.cost}
                id={item.name}
              />
            ))}
          </div>
          <div className="mx-6 my-9 flex flex-col items-center">
            <Button onClick={(e) => handleBillPayment(e)} type="primary">
              Pay Bill
            </Button>
          </div>
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}

function EmptyCart() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center font-mono">
      <p>Your Cart is Empty</p>
      <p>Continue purchasing by clicking on link below 👇</p>
      <Button to="/shows" type="primary">
        Shows
      </Button>
    </div>
  );
}

export default Cart;
