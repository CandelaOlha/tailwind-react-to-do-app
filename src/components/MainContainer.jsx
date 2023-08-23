import Form from "./Form";
import TasksContainer from "./TasksContainer";
import ClearTasks from "./ClearTasks";
import PropTypes from "prop-types";

const MainContainer = ({
  tasks,
  addTask,
  updateTaskStatus,
  deleteTask,
  countPendingTasks,
}) => {
  return (
    <main className="mx-10">
      <Form addTask={addTask} />
      <TasksContainer
        tasks={tasks}
        updateTaskStatus={updateTaskStatus}
        deleteTask={deleteTask}
      />
      <ClearTasks countPendingTasks={countPendingTasks} />
    </main>
  );
};

MainContainer.propTypes = {
  tasks: PropTypes.array.isRequired,
  addTask: PropTypes.func.isRequired,
  updateTaskStatus: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  countPendingTasks: PropTypes.func.isRequired,
};

export default MainContainer;
