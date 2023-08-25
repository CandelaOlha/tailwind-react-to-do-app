import CrossIcon from "./icons/CrossIcon";
import CheckIcon from "./icons/CheckIcon";
import PropTypes from "prop-types";

const Task = ({ task, updateTaskStatus, deleteTask }) => {
  return (
    <article className="flex justify-between p-5 border-b border-gray-500 border-opacity-20 border-solid dark:bg-gray-700 dark:border-opacity-70">
      <div className="flex justify-start items-center">
        <button
          onClick={() => updateTaskStatus(task.id)}
          className={`flex justify-center items-center h-[20px] w-[20px] border border-gray-500 border-solid rounded-full mr-2 ${
            task.completed &&
            "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          }`}
        >
          {task.completed && <CheckIcon />}
        </button>
        <p
          className={`max-w-[200px] text-sm text-gray-500 font-medium dark:text-gray-300 md:max-w-full ${
            task.completed && "line-through"
          }`}
        >
          {task.description}
        </p>
      </div>
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
