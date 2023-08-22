import Form from "./Form";
import TasksContainer from "./TasksContainer";
import ClearTasks from "./ClearTasks";
import PropTypes from "prop-types";

const MainContainer = ({ tasks, addTask }) => {
  return (
    <main className="mx-10">
      <Form addTask={addTask} />
      <TasksContainer tasks={tasks} />
      <ClearTasks />
    </main>
  );
};

MainContainer.propTypes = {
  tasks: PropTypes.array.isRequired,
  addTask: PropTypes.func.isRequired,
};

export default MainContainer;
