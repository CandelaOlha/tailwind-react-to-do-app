import MoonIcon from "./icons/MoonIcon";
import Form from "./Form";

const Header = () => {
  return (
    <header className="bg-[url('./assets/bg-mobile-light.jpg')] p-10">
      <div className="flex justify-between mb-8">
        <h1 className="uppercase text-xl text-white font-bold tracking-widest">
          To do App
        </h1>
        <button className="text-white">
          <MoonIcon />
        </button>
      </div>
      <Form />
    </header>
  );
};

export default Header;
