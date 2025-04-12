export async function getEvents() {
  const res = await fetch(
    "https://eventify-f64e9-default-rtdb.firebaseio.com/events.json"
  );

  if (!res.ok) throw new Error("Failed in fetching data");

  const data = await res.json();

  // Optional: Convert Firebase object to array (if needed)
//   const formattedData = Object.keys(data).map((id) => ({
//     id,
//     ...data[id],
//   }));

//   return formattedData;
    return data;
}
