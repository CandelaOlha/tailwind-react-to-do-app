import Form from "./Form";
import TasksContainer from "./TasksContainer";
import ClearTasks from "./ClearTasks";
import PropTypes from "prop-types";

const MainContainer = ({ tasks }) => {
  return (
    <main className="mx-10">
      <Form />
      <TasksContainer tasks={tasks} />
      <ClearTasks />
    </main>
  );
};

MainContainer.propTypes = {
  tasks: PropTypes.array.isRequired,
};

export default MainContainer;
