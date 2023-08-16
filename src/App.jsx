const App = () => {
  return (
    <div>
      <header className="bg-[url('./assets/bg-mobile-light.jpg')] p-10">
        <div className="flex justify-between mb-5">
          <h1 className="uppercase text-xl text-white font-bold tracking-widest">
            To do App
          </h1>
          <button className="text-white">☽</button>
        </div>
        <form>
          <input
            type="text"
            className="container p-3 rounded-md text-xs text-gray-400 font-semibold"
            placeholder="Create new task"
          />
        </form>
      </header>
      <main className="p-10">
        <div className="bg-white shadow rounded">
          <article className="flex justify-around py-3 border-b border-gray-500 border-opacity-20 border-solid">
            <button className="text-gray-700">✓</button>
            <p className="text-sm text-gray-700 font-medium">
              This is a task description
            </p>
            <button>X</button>
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
