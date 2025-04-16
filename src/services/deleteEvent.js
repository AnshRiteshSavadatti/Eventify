export async function deleteEvent(id) {
  const stringId = String(id);

  const res = await fetch(
    `https://eventify-d2616-default-rtdb.firebaseio.com/events.json`,
    {
      method: "PATCH",
      body: JSON.stringify({ [stringId]: null }),
    }
  );

  if (!res.ok) {
    alert("❌ Failed to delete event");
    throw new Error("Failed to delete event");
  }

  alert(`✅ Event with ID "${stringId}" deleted`);
}
