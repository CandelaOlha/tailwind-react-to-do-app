const ClearTasks = () => {
  return (
    <section className="bg-white rounded-b flex justify-between p-5">
      <p className="text-xs text-gray-400 font-semibold">5 items left</p>
      <button className="text-xs text-gray-400 font-semibold">
        Clear Completed
      </button>
    </section>
  );
};

export default ClearTasks;
