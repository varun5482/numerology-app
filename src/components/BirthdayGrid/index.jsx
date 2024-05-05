import moment from "moment";
import { useCallback } from "react";
import { BASE_GRID } from "./constants";
import { getConductor, getDriver, getKua, resetGrid } from "./utils";

const BirthdayGrid = ({ date, gender }) => {
  let baseGrid = [...BASE_GRID];

  const formatedDate = moment(date).format("DD/MM/YYYY");
  const dateArray = formatedDate?.split("/");

  const kua = getKua(dateArray[2], gender);
  const conductor = getConductor(dateArray);
  const driver = getDriver(dateArray[0]);

  const getFormatedGrid = useCallback(() => {
    resetGrid(baseGrid);
    if (!date) {
      return;
    }
    let value = dateArray.join("");
    for (const str of value) {
      const index = baseGrid.findIndex(({ value }) => value == str);
      if (index !== -1) {
        baseGrid[index].count++;
      }
    }
    const kuaIndex = baseGrid.findIndex(({ value }) => value == kua);
    if (kuaIndex !== -1) {
      baseGrid[kuaIndex].count++;
    }
    const condutorIndex = baseGrid.findIndex(({ value }) => value == conductor);
    if (condutorIndex !== -1) {
      baseGrid[condutorIndex].count++;
    }
    const driverIndex = baseGrid.findIndex(({ value }) => value == driver);
    if (driverIndex !== -1) {
      baseGrid[driverIndex].count++;
    }
  }, [date, gender]);

  const renderGrid = () => {
    getFormatedGrid();
    return baseGrid.map(
      ({
        value,
        count,
        element,
        planet,
        colDirection,
        rowDirection,
        colDirectionPosition = "",
        rowDirectionPosition = "",
      }) => {
        return (
          <div className="relative">
            <div className={`absolute ${colDirectionPosition}`}>
              {colDirection}
            </div>
            <div className="relative">
              <div className={`absolute ${rowDirectionPosition}`}>
                {rowDirection}
              </div>
              <div
                className={`border-2 border-black p-5 ${
                  !count ? "opacity-35" : ""
                }`}
              >
                <div className="flex flex-row justify-between text-gray-600">
                  <div>{value}</div>
                  <div>Count: {count}</div>
                </div>
                <div className="flex flex-row justify-between uppercase">
                  <div className={count ? "text-red-800" : "text-slate-900"}>
                    {element}
                  </div>
                  <div className={count ? "text-orange-800" : "text-slate-900"}>
                    {planet}
                  </div>
                </div>
                {count ? (
                  <div className="flex flex-row gap-1 justify-center">
                    {Array(count)
                      .fill(0)
                      .map((index) => {
                        return <div>{value}</div>;
                      })}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        );
      }
    );
  };

  return (
    <div className="grow">
      <div className="text-left text-xl my-3">Birth Date Grid</div>
      <div className="grid grid-cols-3 p-10">{renderGrid()}</div>
      <div className="flex flex-row gap-5 my-5 justify-center">
        <div className="border-4 border-black rounded p-3">Kua: {kua}</div>
        <div className="border-4 border-black rounded p-3">
          Conductor: {conductor}
        </div>
        <div className="border-4 border-black rounded p-3">
          Driver: {driver}
        </div>
      </div>
    </div>
  );
};

export default BirthdayGrid;
