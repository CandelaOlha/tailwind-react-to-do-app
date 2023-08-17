const Form = () => {
  return (
    <form>
      <input
        type="text"
        name="task"
        className="container py-3 px-5 rounded-md text-xs text-gray-400 font-semibold"
        placeholder="Create a new task..."
      />
    </form>
  );
};

export default Form;
