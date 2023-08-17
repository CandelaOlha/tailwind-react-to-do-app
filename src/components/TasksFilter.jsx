const TasksFilter = () => {
  return (
    <section className="flex justify-around bg-white rounded-md p-5 m-10">
      <button className="text-sm text-gray-400 font-semibold">All</button>
      <button className="text-sm text-gray-400 font-semibold">Active</button>
      <button className="text-sm text-gray-400 font-semibold">Completed</button>
    </section>
  );
};

export default TasksFilter;
