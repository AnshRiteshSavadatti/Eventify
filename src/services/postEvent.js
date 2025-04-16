// const newEvent = {
//   id: 11,
//   name: "Dua Lipa - Future Nostalgia Tour",
//   singername: "Dua Lipa",
//   address: "Accor Arena, Paris",
//   cost: 210,
//   image:
//     "https://upload.wikimedia.org/wikipedia/en/8/8b/Dua_Lipa_-_Future_Nostalgia_Tour.png",
//   seats: 500,
//   booked: 0,
// };

async function postEvent(newEvent) {
    try {
      const response = await fetch("https://eventify-d2616-default-rtdb.firebaseio.com/events.json", {
        method: "POST",
        body: JSON.stringify(newEvent),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      const data = await response.json();
      console.log("✅ Added:", data);
      return data;
      
    } catch (error) {
      console.error("❌ Failed to post event:", error);
      return null;
    }
  }
  
  export default postEvent;
  
