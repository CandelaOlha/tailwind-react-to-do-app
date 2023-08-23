import PropTypes from "prop-types";

const ClearTasks = ({ countPendingTasks }) => {
  return (
    <section className="bg-white rounded-b flex justify-between p-5">
      <p className="text-xs text-gray-400 font-semibold">
        {countPendingTasks()} items left
      </p>
      <button className="text-xs text-gray-400 font-semibold">
        Clear Completed
      </button>
    </section>
  );
};

ClearTasks.propTypes = {
  countPendingTasks: PropTypes.func.isRequired,
};

export default ClearTasks;
