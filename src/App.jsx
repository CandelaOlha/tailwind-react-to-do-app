import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import TasksFilter from "./components/TasksFilter";
import Footer from "./components/Footer";
import { useState } from "react";

const initialStateTasks = [
  { id: 1, description: "This is my first task", completed: true },
  { id: 2, description: "This is my second task", completed: false },
  { id: 3, description: "This is my third task", completed: false },
];

const App = () => {
  const [tasks, setTasks] = useState(initialStateTasks);
  const [filter, setFilter] = useState("all");

  const addTask = (taskDescription) => {
    const newTask = {
      id: Date.now(),
      description: taskDescription,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  const filterTasks = () => {
    if (filter === "all") {
      return tasks;
    } else if (filter === "active") {
      return tasks.filter((task) => !task.completed);
    } else if (filter === "completed") {
      return tasks.filter((task) => task.completed);
    } else {
      return tasks;
    }
  };

  const updateTaskStatus = (id) => {
    const newArray = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });

    setTasks(newArray);
  };

  const deleteTask = (id) => {
    const newArray = tasks.filter((task) => task.id !== id);
    setTasks(newArray);
  };

  const countPendingTasks = () => {
    const pendingTasks = tasks.filter((task) => !task.completed);
    return pendingTasks.length;
  };

  const clearCompletedTasks = () => {
    const uncompletedTasks = tasks.filter((task) => !task.completed);
    setTasks(uncompletedTasks);
  };

  return (
    <div className="bg-gray-100 bg-[url('./assets/bg-mobile-light.jpg')] bg-no-repeat h-screen dark:bg-black">
      <Header />
      <MainContainer
        tasks={filterTasks()}
        addTask={addTask}
        updateTaskStatus={updateTaskStatus}
        deleteTask={deleteTask}
        countPendingTasks={countPendingTasks}
        clearCompletedTasks={clearCompletedTasks}
      />
      <TasksFilter filter={filter} setFilter={setFilter} />
      <Footer />
    </div>
  );
};

export default App;
