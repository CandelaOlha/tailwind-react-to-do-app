import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import TasksFilter from "./components/TasksFilter";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

const initialStateTasks = JSON.parse(localStorage.getItem("tasks")) || [];

const App = () => {
  const [tasks, setTasks] = useState(initialStateTasks);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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
    <div className="bg-gray-100 bg-[url('./assets/bg-mobile-light.jpg')] md:bg-[url('./assets/bg-desktop-light.jpg')] bg-no-repeat h-screen dark:bg-black dark:bg-[url('./assets/bg-mobile-dark.jpg')] md:dark:bg-[url('./assets/bg-desktop-dark.jpg')]">
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
