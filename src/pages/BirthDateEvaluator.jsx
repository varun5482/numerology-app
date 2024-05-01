import React, { useState } from "react";
import BirthdayGrid from "../components/BirthdayGrid";
import DateInput from "../components/DateInput";
import GenderInput from "../components/GenderInput";

const BirthDateEvaluator = () => {
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("M");

  return (
    <div className="flex flex-col w-full gap-3 text-2xl">
      <div className="flex flex-col lg:flex-row gap-5">
        <DateInput date={birthDate} setDate={setBirthDate} />
        <GenderInput gender={gender} setGender={setGender} />
      </div>
      <BirthdayGrid date={birthDate} gender={gender} />
    </div>
  );
};

export default BirthDateEvaluator;
