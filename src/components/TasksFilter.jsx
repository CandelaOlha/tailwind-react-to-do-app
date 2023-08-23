import PropTypes from "prop-types";

const TasksFilter = ({ setFilter }) => {
  return (
    <section className="flex justify-around bg-white rounded-md mx-10 my-5 py-5">
      <button
        onClick={() => setFilter("all")}
        className="text-sm text-gray-400 font-semibold"
      >
        All
      </button>
      <button
        onClick={() => setFilter("active")}
        className="text-sm text-gray-400 font-semibold"
      >
        Active
      </button>
      <button
        onClick={() => setFilter("completed")}
        className="text-sm text-gray-400 font-semibold"
      >
        Completed
      </button>
    </section>
  );
};

TasksFilter.propTypes = {
  setFilter: PropTypes.func.isRequired,
};

export default TasksFilter;
