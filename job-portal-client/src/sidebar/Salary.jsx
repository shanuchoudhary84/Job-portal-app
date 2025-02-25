import React from "react";
import Button from "./Button";
import InputField from "../Components/InputField";
const Salary = ({ handleChange, handleClick }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Salary</h4>
      <div className="mb-4">
        <Button onClickHandler={handleClick} value="hourly" title="Hourly" />
        <Button onClickHandler={handleClick} value="monthly" title="Monthly" />
        <Button onClickHandler={handleClick} value="yearly" title="Yearly" />
      </div>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>All
        </label>

        <InputField
          handleChange={handleChange}
          value="30"
          title="<Rs 30k"
          name="test2"
        />
        <InputField
          handleChange={handleChange}
          value="50"
          title="<Rs 50k"
          name="test2"
        />
        <InputField
          handleChange={handleChange}
          value="80"
          title="<Rs 80k"
          name="test2"
        />
        <InputField
          handleChange={handleChange}
          value="100"
          title="<Rs 100k"
          name="test2"
        />
      </div>
    </div>
  );
};

export default Salary;
