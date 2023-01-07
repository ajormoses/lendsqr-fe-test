import React, { useState } from "react";
import Users from "./Users";
import Form from "../Form/Form";
import { Link } from "react-router-dom";

const MainDashboard = () => {
  const [filter, setFilter] = useState<boolean>(false);
  const [userDetails, setUserDetails] = useState<boolean>(false);

  const handleClick = () => {
    setFilter((prev) => !prev);
  };

  return (
    <div className="main">
      <div>
        <header className="main-header">Users</header>
        <div className="users">
          <Users img="./images/icon-1.png" user="USER" members="2,453" />
          <Users
            img="./images/icon-2.png"
            user="ACTIVE USERS"
            members="2,453"
          />
          <Users
            img="./images/icon-3.png"
            user="USER WITH COINS"
            members="12,453"
          />
          <Users
            img="./images/icon-4.png"
            user="USERS WITH SAVINGS"
            members="102,453"
          />
        </div>
        <div className="main-table">
          <table className="table">
            <tr>
              <th>
                <div onClick={handleClick}>
                  ORGANIZATION
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.22222 11.3333H9.77778V9.55554H6.22222V11.3333ZM0 0.666656V2.44443H16V0.666656H0ZM2.66667 6.88888H13.3333V5.1111H2.66667V6.88888Z"
                      fill="#545F7D"
                    />
                  </svg>
                </div>
              </th>
              <th>
                <div>
                  USERNAME
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.22222 11.3333H9.77778V9.55554H6.22222V11.3333ZM0 0.666656V2.44443H16V0.666656H0ZM2.66667 6.88888H13.3333V5.1111H2.66667V6.88888Z"
                      fill="#545F7D"
                    />
                  </svg>
                </div>
              </th>
              <th>
                <div>
                  EMAIL
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.22222 11.3333H9.77778V9.55554H6.22222V11.3333ZM0 0.666656V2.44443H16V0.666656H0ZM2.66667 6.88888H13.3333V5.1111H2.66667V6.88888Z"
                      fill="#545F7D"
                    />
                  </svg>
                </div>
              </th>
              <th>
                <div>
                  PHONE NUMBER
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.22222 11.3333H9.77778V9.55554H6.22222V11.3333ZM0 0.666656V2.44443H16V0.666656H0ZM2.66667 6.88888H13.3333V5.1111H2.66667V6.88888Z"
                      fill="#545F7D"
                    />
                  </svg>
                </div>
              </th>
              <th>
                <div>
                  DATE JOINED
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.22222 11.3333H9.77778V9.55554H6.22222V11.3333ZM0 0.666656V2.44443H16V0.666656H0ZM2.66667 6.88888H13.3333V5.1111H2.66667V6.88888Z"
                      fill="#545F7D"
                    />
                  </svg>
                </div>
              </th>
              <th>
                <div>
                  STATUS
                  <svg
                    width="16"
                    height="12"
                    viewBox="0 0 16 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.22222 11.3333H9.77778V9.55554H6.22222V11.3333ZM0 0.666656V2.44443H16V0.666656H0ZM2.66667 6.88888H13.3333V5.1111H2.66667V6.88888Z"
                      fill="#545F7D"
                    />
                  </svg>
                </div>
              </th>
            </tr>
            <tr>
              <td>Lendsqr</td>
              <td>Adedeji</td>
              <td>adedeji@lendsqr.com</td>
              <td>08078903721</td>
              <td>May 16, 2020 10:00 AM</td>
              <td>
                <button className="inactive">Inactive</button>
              </td>
            </tr>
            <tr>
              <td>Irorun</td>
              <td>Debby Ogana</td>
              <td>debby2@irorun.com</td>
              <td>07060780922</td>
              <td>Apr 30, 2020 10:00 AM</td>
              <td>
                <button className="blacklisted">Blacklisted</button>{" "}
              </td>
            </tr>
            <tr>
              <td>Lendstar</td>
              <td>
                <Link
                  to="/details"
                  style={{
                    color: "#213F7D",
                    textDecoration: "none",
                    fontFamily: "work sans",
                  }}
                >
                  Grace Effiom
                </Link>
              </td>
              <td>grace@lendstar.com</td>
              <td>07060780922</td>
              <td>Apr 30, 2020 10:00 AM</td>
              <td>
                <button className="blacklisted">Blacklisted</button>
              </td>
            </tr>
            <tr>
              <td>Lendsqr</td>
              <td>Tosin Dokunmu</td>
              <td>tosin@lendsqr.com</td>
              <td>07003309226</td>
              <td>Apr 10, 2020 10:00 AM</td>
              <td>
                <button className="pending">Pending</button>
              </td>
            </tr>
            <tr>
              <td>Lendstar</td>
              <td>
                <Link
                  to="/details"
                  style={{
                    color: "#213F7D",
                    textDecoration: "none",
                    fontFamily: "work sans",
                  }}
                >
                  Grace Effiom
                </Link>
              </td>
              <td>grace@lendstar.com</td>
              <td>07060780922</td>
              <td>Apr 30, 2020 10:00 AM</td>
              <td>
                <button className="active">Active</button>
              </td>
            </tr>
            <tr>
              <td>Lendsqr</td>
              <td>Tosin Dokunmu</td>
              <td>tosin@lendsqr.com</td>
              <td>08060780900</td>
              <td>Apr 10, 2020 10:00 AM</td>
              <td>
                <button className="active">Active</button>
              </td>
            </tr>
            <tr>
              <td>Lendstar</td>
              <td>
                <Link
                  to="/details"
                  style={{
                    color: "#213F7D",
                    textDecoration: "none",
                    fontFamily: "work sans",
                  }}
                >
                  Grace Effiom
                </Link>
              </td>
              <td>grace@lendstar.com</td>
              <td>07060780922</td>
              <td>Apr 30, 2020 10:00 AM</td>
              <td>
                <button className="blacklisted">Blacklisted</button>
              </td>
            </tr>
            <tr>
              <td>Lendsqr</td>
              <td>Tosin Dokunmu</td>
              <td>tosin@lendsqr.com</td>
              <td>08060780900</td>
              <td>Apr 10, 2020 10:00 AM</td>
              <td>
                <button className="inactive">Inactive</button>
              </td>
            </tr>
            <tr>
              <td className="bottom-td">Lendstar</td>
              <td className="bottom-td">
                <td>
                  <Link
                    to="/details"
                    style={{
                      color: "#213F7D",
                      textDecoration: "none",
                      fontFamily: "work sans",
                    }}
                  >
                    Grace Effiom
                  </Link>
                </td>
              </td>
              <td className="bottom-td">grace@lendstar.com</td>
              <td className="bottom-td">07060780922</td>
              <td className="bottom-td">Apr 30, 2020 10:00 AM</td>
              <td className="bottom-td">
                <button className="inactive">Inactive</button>
              </td>
            </tr>
            {filter && <Form />}
          </table>
        </div>
        <footer className="table-footer">
          <div className="table-footer-one">
            <p>Showing</p>
            <select>
              <option value="100">100</option>
            </select>
            <p>out of 100</p>
          </div>
          <div className="table-footer-two">
            <div className="arrow-slider">
              <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.00609 10.0573C7.84719 10.8984 6.54344 12.1595 5.745 11.3184L0.994244 6.56759C0.61581 6.23127 0.61581 5.64282 0.994244 5.3065L5.61858 0.640017C6.45967 -0.158963 7.72082 1.10267 6.87967 1.94322L2.8859 5.937L7.00609 10.0573Z"
                  fill="#213F7D"
                />
              </svg>
            </div>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>...</li>
              <li>15</li>
              <li>16</li>
            </ul>
            <div className="arrow-slider">
              <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.993905 1.94274C0.152813 1.10165 1.45656 -0.159498 2.255 0.68165L7.00576 5.43241C7.38419 5.76873 7.38419 6.35718 7.00576 6.6935L2.38142 11.36C1.54033 12.159 0.279177 10.8973 1.12033 10.0568L5.1141 6.063L0.993905 1.94274Z"
                  fill="#213F7D"
                />
              </svg>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MainDashboard;
