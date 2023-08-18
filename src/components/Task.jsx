import CrossIcon from "./icons/CrossIcon";
import PropTypes from "prop-types";

const Task = ({ task }) => {
  return (
    <article className="flex justify-between p-5 border-b border-gray-500 border-opacity-20 border-solid">
      <button className="h-5 w-5 border border-gray-500 border-solid rounded-full"></button>
      <p className="text-sm text-gray-500 font-medium">{task.description}</p>
      <button>
        <CrossIcon />
      </button>
    </article>
  );
};

Task.propTypes = {
  task: PropTypes.object.isRequired,
};

export default Task;
