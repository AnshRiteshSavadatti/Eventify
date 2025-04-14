import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    " flex text-center inline-block text-sm rounded-full bg-red-400 font-semibold tracking-wide text-stone-800 uppercase transition-colors duration-300 hover:bg-red-300 focus:ring focus:ring-red-300 focus:ring-offseto2 focus:outline-none disabled:cursor-not-allowed sm:px-6 sm:py-4";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:px-2.5 text-xs",
    secondary:
      "inline-block text-sm rounded-full border-2 border-stone-300 font-semi-bold uppercase tracking-wide text-stone-400 transition-color duration-300 hover:bg-stone-300 hover:text-stone-600 focus:bg-stone-300 focus:ring focus:ring-stone-300 focus:outline-none focus:ring-offset-2 disabledd:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-4",
  };
  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  if(onClick)
    return (
      <button disabled={disabled} className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
