import { Link } from "react-router-dom";
import Button from "./Button";

function Header() {
  return (
    <header className="font-momo flex items-center justify-between  bg-red-400 px-4 uppercase sm:px-6">
      <Link to="/" className="tracking-widest italic ">
        <img src="public/Eventify-removebg-preview.png" className="h-24 w-30" />
      </Link>
      search
      <div className="hidden sm:inline-block">username</div>
    </header>
  );
}

export default Header;
