import { Link } from "react-router-dom";

export const Table = () => {
  return (
    <div className="table-component">
      <div className="table-data">
        <table>
          <tr>
            <th>
              <div className="table-header">
                <div>
                  <h1>Select Product(s)</h1>
                </div>
                <div>
                  <button>Download PDF</button>
                </div>
              </div>
            </th>
          </tr>

          <tr>
            <td>
              <div>
                <div>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                </div>
                <div>
                  <label>Chemistry 1</label>
                </div>
                <div>
                  <label>Process 1.1</label>
                </div>
                <div>
                  <Link to="/modal">View Details</Link>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div>
                <div>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                </div>
                <div>
                  <label>Chemistry 1</label>
                </div>
                <div>
                  <label>Process 1.2</label>
                </div>
                <div>
                  <Link to="/modal">View Details</Link>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div>
                <div>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                </div>
                <div>
                  <label>Chemistry 2</label>
                </div>
                <div>
                  <label>Process 2.1</label>
                </div>
                <div>
                  <Link to="/modal">View Details</Link>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div>
                <div>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                </div>
                <div>
                  <label>Chemistry 2</label>
                </div>
                <div>
                  <label>Process 2.2</label>
                </div>
                <div>
                  <Link to="/modal">View Details</Link>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div>
                <div>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                </div>
                <div>
                  <label>Chemistry 3</label>
                </div>
                <div>
                  <label>Process 3.1</label>
                </div>
                <div>
                  <Link to="/modal">View Details</Link>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div>
                <div>
                  <input
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                </div>
                <div>
                  <label>Chemistry 3</label>
                </div>
                <div>
                  <label>Process 3.2</label>
                </div>
                <div>
                  <Link to="/modal">View Details</Link>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};
