import Task from "./Task";
import PropTypes from "prop-types";

const TasksContainer = ({ tasks }) => {
  return (
    <div className="bg-white shadow rounded-t">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

TasksContainer.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default TasksContainer;
