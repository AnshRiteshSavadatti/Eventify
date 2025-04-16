import { useState } from "react";
import Button from "../UI/Button";
import postEvent from "../services/postEvent";

function AdminModifyEvents() {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    singername: "",
    address: "",
    cost: "",
    image: "",
    seats: "",
    booked: 0,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "cost" || name === "seats" || name === "id"
          ? Number(value)
          : value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await postEvent(formData);
    alert("✅ Event added!");
    setFormData({
      id: "",
      name: "",
      singername: "",
      address: "",
      cost: "",
      image: "",
      seats: "",
      booked: 0,
    });
  }

  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Add New Event</h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 gap-6 max-w-4xl"
      >
        <input
          type="number"
          name="id"
          value={formData.id}
          onChange={handleChange}
          placeholder="ID"
          className="input"
        />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Event Name"
          className="input"
        />
        <input
          type="text"
          name="singername"
          value={formData.singername}
          onChange={handleChange}
          placeholder="Singer Name"
          className="input"
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Venue Address"
          className="input"
        />
        <input
          type="number"
          name="cost"
          value={formData.cost}
          onChange={handleChange}
          placeholder="Ticket Cost"
          className="input"
        />
        <input
          type="number"
          name="seats"
          value={formData.seats}
          onChange={handleChange}
          placeholder="Total Seats"
          className="input"
        />
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="col-span-2 input"
        />
        <div className="col-span-2 flex justify-center mt-4">
          <Button type="submit" type="primary">Add Event</Button>
        </div>
      </form>
    </div>
  );
}

export default AdminModifyEvents;
