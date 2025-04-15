import { Link, useLoaderData } from "react-router";
import ShowItems from "./ShowItems";
import { getEvents } from "../../services/getEvents";
import Button from "../../UI/Button";

function Shows() {
  const shows = useLoaderData();

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Available Shows 🎭
      </h1>

      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {shows.map((show) => (
          <ShowItems
            key={show.name}
            image={show.image}
            cost={show.cost}
            name={show.name}
            address={show.address}
          />
        ))}
      </ul>

      <div className="mt-10 flex justify-center">
        <Button
          to="/cart"
          type="primary"
        >
          Go to Cart 🛒
        </Button>
      </div>
    </div>
  );
}

export async function loader() {
  const shows = await getEvents();
  return shows;
}

export default Shows;
