import PropTypes from "prop-types";

const TasksFilter = ({ filter, setFilter }) => {
  return (
    <section className="flex justify-around bg-white rounded-md mx-10 my-5 py-5 dark:bg-gray-700 md:max-w-2xl md:mx-auto">
      <button
        onClick={() => setFilter("all")}
        className={`text-sm font-semibold ${
          filter === "all" ? "text-blue-500" : "text-gray-400"
        }`}
      >
        All
      </button>
      <button
        onClick={() => setFilter("active")}
        className={`text-sm font-semibold ${
          filter === "active" ? "text-blue-500" : "text-gray-400"
        }`}
      >
        Active
      </button>
      <button
        onClick={() => setFilter("completed")}
        className={`text-sm font-semibold ${
          filter === "completed" ? "text-blue-500" : "text-gray-400"
        }`}
      >
        Completed
      </button>
    </section>
  );
};

TasksFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default TasksFilter;
