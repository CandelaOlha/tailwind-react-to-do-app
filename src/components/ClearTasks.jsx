import PropTypes from "prop-types";

const ClearTasks = ({ countPendingTasks, clearCompletedTasks }) => {
  return (
    <section className="bg-white rounded-b flex justify-between p-5 dark:bg-gray-700">
      <p className="text-xs text-gray-400 font-semibold">
        {countPendingTasks()} items left
      </p>
      <button
        onClick={clearCompletedTasks}
        className="text-xs text-gray-400 font-semibold"
      >
        Clear Completed
      </button>
    </section>
  );
};

ClearTasks.propTypes = {
  countPendingTasks: PropTypes.func.isRequired,
  clearCompletedTasks: PropTypes.func.isRequired,
};

export default ClearTasks;
