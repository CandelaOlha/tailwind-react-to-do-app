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
  clearCompletedTasks,
}) => {
  return (
    <main className="mx-10 md:max-w-2xl md:mx-auto">
      <Form addTask={addTask} />
      <TasksContainer
        tasks={tasks}
        updateTaskStatus={updateTaskStatus}
        deleteTask={deleteTask}
      />
      <ClearTasks
        countPendingTasks={countPendingTasks}
        clearCompletedTasks={clearCompletedTasks}
      />
    </main>
  );
};

MainContainer.propTypes = {
  tasks: PropTypes.array.isRequired,
  addTask: PropTypes.func.isRequired,
  updateTaskStatus: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  countPendingTasks: PropTypes.func.isRequired,
  clearCompletedTasks: PropTypes.func.isRequired,
};

export default MainContainer;
