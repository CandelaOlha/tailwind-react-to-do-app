import CrossIcon from "./icons/CrossIcon";
import CheckIcon from "./icons/CheckIcon";
import PropTypes from "prop-types";

const Task = ({ task, updateTaskStatus, deleteTask }) => {
  return (
    <article className="flex justify-between p-5 border-b border-gray-500 border-opacity-20 border-solid">
      <button
        onClick={() => updateTaskStatus(task.id)}
        className={`flex justify-center items-center h-5 w-5 border border-gray-500 border-solid rounded-full ${
          task.completed &&
          "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        }`}
      >
        {task.completed && <CheckIcon />}
      </button>
      <p
        className={`text-sm text-gray-500 font-medium ${
          task.completed && "line-through"
        }`}
      >
        {task.description}
      </p>
      <button onClick={() => deleteTask(task.id)}>
        <CrossIcon />
      </button>
    </article>
  );
};

Task.propTypes = {
  task: PropTypes.object.isRequired,
  updateTaskStatus: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default Task;
