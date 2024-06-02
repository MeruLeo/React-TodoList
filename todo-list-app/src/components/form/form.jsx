import InputField from "./input.jsx";

const Form = ({ children, btn, onSubmit }) => {
  return (
    <form>
      <InputField />
      {btn}
    </form>
  );
};

export default Form;
