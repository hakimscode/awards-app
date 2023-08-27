import { useEffect, useRef, useState } from "react";
import { FilterAwardsType, FilterProps } from "../types/filter";
import { MdClose } from "react-icons/md";
import { RiCloseCircleFill } from "react-icons/ri";

const Filter: React.FC<FilterProps> = ({
  show,
  setShow,
  setFilterPoint,
  setFilterType,
}) => {
  const trigger = useRef<any>(null);
  const modal = useRef<any>(null);

  const max = 500000;

  const [filterAll, setFilterAll] = useState<boolean>(true);
  const [filterAwardsType, setFilterAwardsType] = useState<FilterAwardsType[]>([
    {
      id: 1,
      label: "Vouchers",
      value: "Vouchers",
      checked: true,
    },
    {
      id: 2,
      label: "Products",
      value: "Products",
      checked: true,
    },
    {
      id: 3,
      label: "Others",
      value: "Others",
      checked: true,
    },
  ]);
  const [types, setTypes] = useState<string[]>([]);

  const [point, setPoint] = useState(0);

  // Triggered when the value gets updated while scrolling the slider:
  const handleInput = (e) => {
    setPoint(e.target.value);
  };

  const handleFilterAll = (filtered: boolean) => {
    setFilterAll(filtered);
    const temp = [...filterAwardsType];
    for (const element of temp) {
      element.checked = filtered;
    }
    setFilterAwardsType(temp);
  };

  const handleCheckbox = (index: number) => {
    const temp = [...filterAwardsType];
    temp[index].checked = !temp[index].checked;
    setFilterAwardsType(temp);

    for (const element of filterAwardsType) {
      if (!element.checked) {
        setFilterAll(false);
        return;
      }
    }
    setFilterAll(true);
  };

  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!modal.current) return;
      if (
        !show ||
        modal.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setShow(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // ? close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!show || keyCode !== 27) return;
      setShow(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    const selectedTypes: string[] = [];
    filterAwardsType.forEach((filterType) => {
      if (filterType.checked) {
        selectedTypes.push(filterType.value);
      }
    });

    setTypes(selectedTypes);
  }, [filterAwardsType]);

  const handleClearFilters = () => {
    setPoint(0);
    handleFilterAll(true);
  };

  const handleFilter = () => {
    setFilterPoint(point);
    setFilterType(types);
    setShow(false);
  };

  return (
    <div className={`container_filter ${show ? "active" : ""}`}>
      <div className="filter">
        <div className="header">
          <h4>Filter</h4>
          <MdClose onClick={() => setShow(!show)} />
        </div>

        <div>
          {point > 0 && (
            <div className="filtered" onClick={() => setPoint(0)}>
              Poin:{" "}
              {new Intl.NumberFormat("id-ID", {
                currency: "IDR",
              }).format(point)}{" "}
              -{" "}
              {new Intl.NumberFormat("id-ID", {
                currency: "IDR",
              }).format(max)}
              <RiCloseCircleFill />
            </div>
          )}
          {!filterAll && (
            <div className="filtered" onClick={() => handleFilterAll(true)}>
              Type: {types.join(", ")} <RiCloseCircleFill />
            </div>
          )}

          {(point > 0 || !filterAll) && (
            <div className="filtered" onClick={handleClearFilters}>
              Clear Filters
            </div>
          )}
        </div>

        <div className="filter-price">
          <h3>Point Needed</h3>
          <div className="caption">
            <p>
              IDR:{" "}
              {new Intl.NumberFormat("id-ID", {
                currency: "IDR",
              }).format(point)}
            </p>
            <p>
              IDR:{" "}
              {new Intl.NumberFormat("id-ID", {
                currency: "IDR",
              }).format(max)}
            </p>
          </div>
          <input
            type="range"
            value={point}
            min={0}
            max={max}
            onInput={handleInput}
          />
        </div>

        <div className="filter-type">
          <h3>Awards Type</h3>
          <div className="choices">
            <div>
              <label className="form-control">
                <input
                  className="checkbox"
                  type="checkbox"
                  value="All Type"
                  checked={filterAll}
                  onClick={() => handleFilterAll(!filterAll)}
                />
                All Type
              </label>
            </div>
            {filterAwardsType.map(
              (filterType: FilterAwardsType, index: number) => (
                <div key={filterType.id}>
                  <label className="form-control">
                    <input
                      className="checkbox"
                      type="checkbox"
                      value={filterType.value}
                      checked={filterType.checked}
                      onClick={() => handleCheckbox(index)}
                    />
                    {filterType.label}
                  </label>
                </div>
              )
            )}
          </div>
        </div>

        <div className="footer" onClick={handleFilter}>
          <div className="submit-filter">Filter</div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
