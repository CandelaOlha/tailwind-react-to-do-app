import PropTypes from "prop-types";

const TasksFilter = ({ filter, setFilter }) => {
  return (
    <section className="flex justify-around bg-white rounded-md mx-10 my-5 py-5 dark:bg-gray-700">
      <button
        onClick={() => setFilter("all")}
        className={`text-sm text-gray-400 font-semibold ${
          filter === "all" && "text-blue-500"
        }`}
      >
        All
      </button>
      <button
        onClick={() => setFilter("active")}
        className={`text-sm text-gray-400 font-semibold ${
          filter === "active" && "text-blue-500"
        }`}
      >
        Active
      </button>
      <button
        onClick={() => setFilter("completed")}
        className={`text-sm text-gray-400 font-semibold ${
          filter === "completed" && "text-blue-500"
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
