import MoonIcon from "./components/icons/MoonIcon";
import CrossIcon from "./components/icons/CrossIcon";

const App = () => {
  return (
    <div>
      <header className="bg-[url('./assets/bg-mobile-light.jpg')] p-10">
        <div className="flex justify-between mb-8">
          <h1 className="uppercase text-xl text-white font-bold tracking-widest">
            To do App
          </h1>
          <button className="text-white">
            <MoonIcon />
          </button>
        </div>
        <form>
          <input
            type="text"
            className="container p-3 rounded-md text-xs text-gray-400 font-semibold"
            placeholder="Create a new task..."
          />
        </form>
      </header>
      <main className="p-10">
        <div className="bg-white shadow rounded">
          <article className="flex justify-around py-3 border-b border-gray-500 border-opacity-20 border-solid">
            <button className="h-5 w-5 border border-gray-500 border-solid rounded-full"></button>
            <p className="text-sm text-gray-500 font-medium">
              This is a task description
            </p>
            <button>
              <CrossIcon />
            </button>
          </article>
        </div>
      </main>
      <footer className="flex justify-around p-10">
        <button className="text-xs text-gray-400 font-semibold">All</button>
        <button className="text-xs text-gray-400 font-semibold">Active</button>
        <button className="text-xs text-gray-400 font-semibold">
          Completed
        </button>
      </footer>
    </div>
  );
};

export default App;
