import Task from "./Task";
import PropTypes from "prop-types";

const TasksContainer = ({ tasks, updateTaskStatus, deleteTask }) => {
  return (
    <div className="bg-white shadow rounded-t">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          updateTaskStatus={updateTaskStatus}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

TasksContainer.propTypes = {
  tasks: PropTypes.array.isRequired,
  updateTaskStatus: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TasksContainer;
