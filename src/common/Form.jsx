import { form } from "motion/react-client";
import React from "react";
import FormItem from "./FormItem";

const Form = ({
  headerText,
  formItems,
  setFormData,
  formButtons,
  formStyle,
}) => {
  const handleInputChange = (name, value) => {
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className={formStyle}
    >
      {headerText && <h1 className={headerText.style}>{headerText.title}</h1>}
      {formItems.map((item) => (
        <FormItem
        handleInputChange={handleInputChange}
          label={item.label}
          name={item.name}
          type={item.type}
          placeholder={item.placeholder}
          inputStyle={item.inputStyle}
          value={item.value}
        />
      ))}
      {formButtons.map((button) => (
        <button onClick={button.action} className={button.style}>
          {button.title}
        </button>
      ))}
    </form>
  );
};

export default Form;
