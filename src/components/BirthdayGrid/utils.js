const getSumValue = (val) => {
  let sum = 0;
  if (val === "Invalid date" || !val) {
    return sum;
  }
  while (val != 0) {
    let value = val % 10;
    sum += value;
    val = Math.floor(val / 10);
    if (val === 0 && sum >= 10) {
      val = sum;
      sum = 0;
    }
  }
  return sum;
};

export const getKua = (date, gender) => {
  let kua = getSumValue(date);
  if (gender === "M") {
    kua = Math.abs(kua - 11);
  } else {
    kua = Math.abs(kua + 4);
  }
  return getSumValue(kua);
};

export const getDriver = (date) => {
  return getSumValue(date);
};

export const getConductor = (date) => {
  const sumValue = date.reduce((sum, val) => {
    return sum + getSumValue(val);
  }, 0);
  return getSumValue(sumValue);
};

export const resetGrid = (grid) => {
  grid.forEach((val) => (val.count = 0));
};
