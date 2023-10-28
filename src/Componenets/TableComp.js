import React, { useEffect, useState } from "react";
function Table(props) {
  const seletedValue = props.tableValue;
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`http://localhost:3000/${seletedValue}`)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  }, [seletedValue]);

  return (
    <div className="table-container">
      {/* <div>{JSON.stringify(data)}</div> */}
      <table id="table">
        <caption>Select one option to view table</caption>
        <thead>
          <tr>
            <th>Video</th>
            <th>Tagged To</th>
            <th>Tagged Entities</th>
            <th>Video Tags</th>
            <th>Flows</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((a) => (
            <tr>
              <td>
                <img src="./image.jpg" alt="img" height={40} width={40} />
                <span>
                  {a.Video} {a.Video}
                </span>
              </td>
              <td>{a.TaggedTo}</td>
              <td>{a.TaggedEntities}</td>
              <td>
                <span id="Active">Active</span>
              </td>
              <td>
                <span id="Active">Active</span>
                <span id="CustomerData">Customer Data</span>
                <span id="Admin">Admin</span>
              </td>
              <td>
                <div>
                  <span id={a.Status}>{a.Status}</span>
                </div>
              </td>
              <td>
                <i class="fa-regular fa-trash-can"></i>
                <i class="fa-solid fa-pen"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Table;
