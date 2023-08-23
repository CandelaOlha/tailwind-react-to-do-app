import Task from "./Task";
import PropTypes from "prop-types";

const TasksContainer = ({ tasks, updateTaskStatus }) => {
  return (
    <div className="bg-white shadow rounded-t">
      {tasks.map((task) => (
        <Task key={task.id} task={task} updateTaskStatus={updateTaskStatus} />
      ))}
    </div>
  );
};

TasksContainer.propTypes = {
  tasks: PropTypes.array.isRequired,
  updateTaskStatus: PropTypes.func.isRequired,
};

export default TasksContainer;
