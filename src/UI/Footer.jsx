import Button from "./Button";

function Footer() {
  const className =
    "flex text-center inline-block text-sm rounded-full bg-red-400 font-semibold tracking-wide text-stone-800 uppercase transition-colors duration-300 hover:bg-red-300 focus:ring focus:ring-red-300 focus:ring-offseto2 focus:outline-none disabled:cursor-not-allowed sm:px-6 sm:py-4";
  return (
    <footer className="flex justify-around items-center bg-red-400 px-4 py-1">
      <Button to="/admin" className={className} type="primary">
        Admin Login
      </Button>
      <p>&copy; Eventify</p>
      <a href="https://github.com/AnshRiteshSavadatti" className={className}>
        GitHub
      </a>
    </footer>
  );
}

export default Footer;
