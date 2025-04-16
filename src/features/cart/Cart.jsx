import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import Button from "../../UI/Button";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import axios from "axios";
import { useState } from "react";

function Cart() {
  const [billLink, setBillLink] = useState(null);
  const items = useSelector((state) => state.cart.items);

  const username = useSelector((state) => state.user.userName);

  async function uploadPdfToImageKit(pdfBlob, filename) {
    const formData = new FormData();
    formData.append("file", pdfBlob);
    formData.append("fileName", filename);
    formData.append("useUniqueFileName", "true");

    const auth = {
      username: "private_qWTUtttYi5e+XJQcaX7nphTJsC0=", // ⚠️ Keep this secret
      password: "",
    };

    const response = await axios.post(
      "https://upload.imagekit.io/api/v1/files/upload",
      formData,
      { auth }
    );

    return response.data.url; // 🔗 Final public PDF URL
  }

  async function handleBillPayment(e) {
    e.preventDefault();

    const doc = new jsPDF();
    const imageUrl = "/Eventify.png";

    const imageBlob = await fetch(imageUrl).then((res) => res.blob());

    const reader = new FileReader();
    reader.onloadend = async function () {
      const base64data = reader.result;

      doc.addImage(base64data, "PNG", 150, 10, 40, 20);
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
          head: [["#", "Name", "Address", "Cost", "Qty", "Total"]],
          body: tableData,
          startY: 35,
        });

        const total = items.reduce(
          (acc, item) => acc + item.cost * item.quantity,
          0
        );

        doc.setFontSize(14);
        doc.text(`Total: ₹${total}`, 20, doc.lastAutoTable.finalY + 10);
      } else {
        doc.text("Cart is empty.", 20, 35);
      }

      const pdfBlob = doc.output("blob");
      const filename = `${username}_bill_${Date.now()}.pdf`;

      try {
        const url = await uploadPdfToImageKit(pdfBlob, filename);
        alert(`✅ Your bill is ready!\n${url}`);
        setBillLink(url); // Save link to state
        // You can also show the link in a UI element
      } catch (error) {
        console.error("ImageKit upload failed:", error);
      }
    };

    reader.readAsDataURL(imageBlob);
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
      <div className="mx-6 my-9 flex flex-col items-center">
        {billLink && (
          <a
            href={billLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-blue-600 underline"
          >
            🔗 View Your PDF Bill
          </a>
        )}
      </div>
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
