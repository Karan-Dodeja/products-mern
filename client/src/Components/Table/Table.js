import React from "react";
import { Link } from "react-router-dom";

const tableHeader = () => {
  return (
    <div className="table-header">
      <div>
        <h1>Select Product(s)</h1>
      </div>
      <div>
        <button>Download PDF</button>
      </div>
    </div>
  );
};

export const Table = () => {
  return (
    <div className="table-component">
      <div className="table-data">
        <table>
          <th>{tableHeader}</th>
          <tr>
            <td>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
            </td>
            <td>
              <label>Chemistry 1</label>
            </td>
            <td>
              <label>Process 1.2</label>
            </td>
            <td>
              <Link to="/">View Details</Link>
            </td>
          </tr>

          <tr>
            <td>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
            </td>
            <td>
              <label>Chemistry 2</label>
            </td>
            <td>
              <label>Process 2.1</label>
            </td>
            <td>
              <Link to="/">View Details</Link>
            </td>
          </tr>

          <tr>
            <td>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
            </td>
            <td>
              <label>Chemistry 2</label>
            </td>
            <td>
              <label>Process 2.2</label>
            </td>
            <td>
              <Link to="/">View Details</Link>
            </td>
          </tr>

          <tr>
            <td>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
            </td>
            <td>
              <label>Chemistry 3</label>
            </td>
            <td>
              <label>Process 3.1</label>
            </td>
            <td>
              <Link to="/">View Details</Link>
            </td>
          </tr>

          <tr>
            <td>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
            </td>
            <td>
              <label>Chemistry 3</label>
            </td>
            <td>
              <label>Process 3.2</label>
            </td>
            <td>
              <Link to="/">View Details</Link>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};
