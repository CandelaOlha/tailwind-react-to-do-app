import Form from "./Form";
import TasksContainer from "./TasksContainer";
import ClearTasks from "./ClearTasks";

const MainContainer = () => {
  return (
    <main className="mx-10">
      <Form />
      <TasksContainer />
      <ClearTasks />
    </main>
  );
};

export default MainContainer;
