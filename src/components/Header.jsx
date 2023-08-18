import MoonIcon from "./icons/MoonIcon";

const Header = () => {
  return (
    <header className="flex justify-between mx-10 py-10">
      <h1 className="uppercase text-xl text-white font-bold tracking-widest">
        To do App
      </h1>
      <button className="text-white">
        <MoonIcon />
      </button>
    </header>
  );
};

export default Header;
