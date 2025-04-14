import { Link, useNavigate } from "react-router";
import Button from "./Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateName } from "../features/user/UserSlice";

function HomePage() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.userName);
  const navigate = useNavigate();

  function handleChange(e) {
    e.preventDefault();
    dispatch(updateName(name));
    setName("");
    navigate("/shows");
    console.log(username);
  }

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
      <div>
        {!username && (
          <div className="flex flex-col gap-5">
            <label className="text-white text-xl">
              👋 Welcome,Please start by telling us your name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input"
            />
            <Button onClick={(e) => handleChange(e)} type="primary">
              Submit
            </Button>
          </div>
        )}
      </div>

      {username && (
        <Button
          to="/shows"
          type="primary"
          className="flex justify-center items-center"
        >
          Book tickets now... {username}
        </Button>
      )}
    </div>
  );
}

export default HomePage;
