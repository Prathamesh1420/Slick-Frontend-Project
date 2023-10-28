import React from "react";

function Filter(props) {
  const valueChange = props.valueChange;
  const arr = [
    "Product",
    "Collection",
    "Collection_Product",
    "Video_Tags",
    "Product_Tags",
    "Product_Group_Tags",
    "Collection_Tags",
    "None",
  ];
  return (
    <div className="filter-container">
      <label htmlFor="Options" id="FilterLabel">
        Define Card Groups
      </label>
      <select
        name="Options"
        id="Options"
        defaultValue={"None"}
        onChange={(event) => valueChange(event.target.value)}
      >
        {arr.map((values) => (
          <option key={values} value={values}>
            {values}
          </option>
        ))}
      </select>
    </div>
  );
}
export default Filter;
