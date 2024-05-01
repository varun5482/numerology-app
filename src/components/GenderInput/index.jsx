import React from "react";

const GenderInput = ({ gender, setGender }) => {
  const onGenderChange = (e) => {
    let genderValue = e.target.value;
    setGender(genderValue);
  };

  return (
    <div>
      <div>Select Gender</div>
      <div className="flex flex-row gap-3">
        <div>
          <label className="pr-3" htmlFor="male">
            Male
          </label>
          <input
            type="radio"
            name="gender"
            id="male"
            value="M"
            checked={gender === "M"}
            onChange={onGenderChange}
          />
        </div>
        <div>
          <label className="pr-3" htmlFor="female">
            Female
          </label>
          <input
            id="female"
            type="radio"
            name="gender"
            value="F"
            checked={gender === "F"}
            onChange={onGenderChange}
          />
        </div>
      </div>
    </div>
  );
};

export default GenderInput;
