import { useLoaderData } from "react-router";
import { deleteEvent } from "../services/deleteEvent";
import { getEvents } from "../services/getEvents";
import Button from "../UI/Button";

function AdminDeleteItems() {
  const shows = useLoaderData();

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
      {shows.map((show) => (
        <ShowAdminItems
          key={show.name}
          image={show.image}
          cost={show.cost}
          name={show.name}
          address={show.address}
        />
      ))}
    </div>
  );
}

function ShowAdminItems({ id, name, image, cost, address }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 transition duration-300 hover:shadow-lg">
      <div className="flex items-center justify-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-30 h-60 object-cover rounded-md mb-4 "
        />
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
          <p className="text-gray-600">{address}</p>
          <p className="mt-2 text-red-600 font-medium text-xl">
            &#8377;{cost} per ticket
          </p>
          <Button type="primary" onClick={() => deleteEvent(id)}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}
export async function loader() {
  const shows = await getEvents();
  return shows;
}

export default AdminDeleteItems;
