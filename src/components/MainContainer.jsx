import TasksContainer from "./TasksContainer";
import ClearTasks from "./ClearTasks";

const MainContainer = () => {
  return (
    <main className="p-10">
      <TasksContainer />
      <ClearTasks />
    </main>
  );
};

export default MainContainer;
