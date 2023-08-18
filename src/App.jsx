import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import TasksFilter from "./components/TasksFilter";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-gray-100 bg-[url('./assets/bg-mobile-light.jpg')] bg-no-repeat h-screen">
      <Header />
      <MainContainer />
      <TasksFilter />
      <Footer />
    </div>
  );
};

export default App;
