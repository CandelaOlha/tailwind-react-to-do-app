import PropTypes from "prop-types";
import { useState } from "react";

const Form = ({ addTask }) => {
  const [taskDescription, setTaskDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(taskDescription);
    setTaskDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-5">
      <input
        type="text"
        name="task"
        className="container py-3 px-5 rounded-md text-xs text-gray-400 font-semibold"
        placeholder="Create a new task..."
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
    </form>
  );
};

Form.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default Form;
