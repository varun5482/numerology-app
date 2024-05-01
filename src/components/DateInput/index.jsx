import React from "react";

const DateInput = ({ date, setDate }) => {
  const handleChange = (e) => {
    let newDate = e.target.value;
    setDate(newDate);
  };

  return (
    <div className="flex flex-col">
      <label htmlFor="dob">Select Birthdate</label>
      <div className="w-100">
        <input
          id="dob"
          type="date"
          className="w-200 form-input rounded-full"
          value={date}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default DateInput;
