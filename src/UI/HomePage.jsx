import { Link } from "react-router";
import Button from "./Button";

function HomePage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center gap-20 "
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/eventify-homePage-eventImage.jpg")`,
      }}
    >
      <p className="text-4xl font-bold text-white text-center drop-shadow-lg">
        🎉 Eventify — Where Every Moment Becomes a Memory! ✨
      </p>

      <Button
        to="/shows"
        type="primary"
        className="flex justify-center items-center"
      >
        Book tickets now
      </Button>
    </div>
  );
}

export default HomePage;
