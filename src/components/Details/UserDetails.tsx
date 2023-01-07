import React from "react";
import { Link } from "react-router-dom";

const UserDetails = () => {
  return (
    <div className="user-details">
      <header>
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <div className="back-details">
            <svg
              width="28"
              height="10"
              viewBox="0 0 28 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.94997 5.35639C0.994502 5.47123 1.0613 5.5767 1.14684 5.66575L4.89684 9.41575C5.07263 9.5927 5.31285 9.69348 5.56248 9.69348C5.81211 9.69348 6.05232 9.5927 6.22812 9.41575C6.40508 9.23997 6.50586 8.99974 6.50586 8.75011C6.50586 8.50048 6.40508 8.26027 6.22812 8.08447L4.07187 5.93761H26.6562C27.1742 5.93761 27.5937 5.51809 27.5937 5.00011C27.5937 4.48213 27.1742 4.06261 26.6562 4.06261H4.07187L6.22812 1.91575C6.5961 1.54777 6.5961 0.952482 6.22812 0.584502C5.86014 0.216522 5.26485 0.216522 4.89687 0.584502L1.14687 4.3345C1.06133 4.42356 0.994532 4.52903 0.95 4.64386C0.901952 4.75636 0.876173 4.87706 0.875 5.00011C0.876172 5.12316 0.901953 5.24386 0.95 5.35636L0.94997 5.35639Z"
                fill="#545F7D"
              />
            </svg>
            <p>Back to Users</p>
          </div>
        </Link>
        <div className="userdetails">
          <h2>User Details</h2>
          <div className="userdetails-btns">
            <button className="blacklist">BLACKLIST USER</button>
            <button className="activateUser">ACTIVATE USER</button>
          </div>
        </div>
      </header>
      <section>
        <article className="first-dashbox">
          <table className="first-dashbox-table">
            <tr>
              <th>
                <div className="user-profile">
                  <svg
                    width="100"
                    height="100"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      opacity="0.16"
                      cx="50"
                      cy="50"
                      r="50"
                      fill="#213F7D"
                    />
                    <path
                      d="M36.0405 65.1796C36.4796 62.2202 37.7936 59.6264 39.9796 57.4C42.7405 54.6 46.0732 53.2 49.9796 53.2C53.886 53.2 57.2204 54.6 59.9796 57.4C62.1796 59.6266 63.5062 62.2204 63.9593 65.1796M58.1405 44.0204C58.1405 46.247 57.3468 48.1532 55.7593 49.7408C54.1734 51.3408 52.253 52.1408 50.0001 52.1408C47.7594 52.1408 45.8409 51.3408 44.2409 49.7408C42.6534 48.1533 41.8596 46.247 41.8596 44.0204C41.8596 41.7673 42.6534 39.8468 44.2409 38.2596C45.8409 36.6737 47.7596 35.8799 50.0001 35.8799C52.2532 35.8799 54.1737 36.6737 55.7593 38.2596C57.3468 39.8471 58.1405 41.7674 58.1405 44.0204Z"
                      stroke="#213F7D"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div>
                    <h1>Grace Effiom</h1>
                    <p>LSQFf587g90</p>
                  </div>
                </div>
              </th>
              <th>
                <div className="user-tier tier">
                  <p>User's Tier</p>
                  <div className="stars">
                    <svg
                      width="16"
                      height="14"
                      viewBox="0 0 16 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.98572 0.287513C7.85197 0.293138 7.73572 0.381263 7.69447 0.508761L6.18759 5.17996L1.28071 5.16996C1.14196 5.16996 1.01821 5.25934 0.975716 5.39121C0.932591 5.52371 0.980091 5.66809 1.09259 5.74996L5.06891 8.62676L3.54203 13.293C3.49891 13.4249 3.54578 13.5699 3.65828 13.6511C3.77016 13.733 3.92265 13.733 4.03454 13.6511L7.9995 10.758L11.9657 13.6511C12.0776 13.733 12.2301 13.733 12.342 13.6511C12.4545 13.5699 12.5014 13.4249 12.4582 13.293L10.9314 8.62676L14.9077 5.74996C15.0202 5.66809 15.0677 5.52371 15.0246 5.39121C14.9814 5.25933 14.8583 5.16996 14.7196 5.17059L9.81269 5.18059L8.30393 0.509385V0.50876C8.25956 0.371885 8.12957 0.28188 7.98581 0.287512L7.98572 0.287513Z"
                        fill="#E9B200"
                      />
                    </svg>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.98439 0.959992C7.85189 0.966867 7.73688 1.05437 7.69563 1.18062L6.08939 5.99998H0.945073V6.0006C0.806948 6.0006 0.684449 6.08935 0.641953 6.2206C0.598828 6.35185 0.645078 6.49561 0.755703 6.5781L4.93442 9.63379L3.32818 14.6213V14.6207C3.28506 14.7532 3.33256 14.8976 3.44506 14.9788C3.55756 15.0607 3.70943 15.0601 3.82131 14.9782L8.00003 11.9225L12.1788 14.9782C12.2906 15.0601 12.4425 15.0607 12.555 14.9788C12.6675 14.8976 12.715 14.7532 12.6719 14.6207L11.0656 9.63316L15.2444 6.57748V6.5781C15.355 6.49561 15.4012 6.35185 15.3581 6.2206C15.3156 6.08935 15.1931 6.0006 15.055 6.0006H9.91068L8.30444 1.18124V1.18062C8.26006 1.04374 8.1288 0.953112 7.98444 0.959992H7.98439ZM8.00001 2.29374L9.37564 6.41998V6.4206C9.41814 6.55185 9.54127 6.64122 9.68001 6.6406H14.0738L10.4987 9.255V9.25563C10.3875 9.33688 10.3406 9.48062 10.3831 9.61251L11.7587 13.8807L8.1893 11.2712H8.18867C8.07617 11.1887 7.92368 11.1887 7.81117 11.2712L4.24173 13.8807L5.61736 9.61251H5.61673C5.65923 9.48063 5.61236 9.33687 5.50111 9.25563L1.92607 6.64123H6.31983V6.6406C6.45858 6.64123 6.5817 6.55185 6.6242 6.4206L7.99983 2.29436L8.00001 2.29374Z"
                        fill="#E9B200"
                      />
                    </svg>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.98439 0.959992C7.85189 0.966867 7.73688 1.05437 7.69563 1.18062L6.08939 5.99998H0.945073V6.0006C0.806948 6.0006 0.684449 6.08935 0.641953 6.2206C0.598828 6.35185 0.645078 6.49561 0.755703 6.5781L4.93442 9.63379L3.32818 14.6213V14.6207C3.28506 14.7532 3.33256 14.8976 3.44506 14.9788C3.55756 15.0607 3.70943 15.0601 3.82131 14.9782L8.00003 11.9225L12.1788 14.9782C12.2906 15.0601 12.4425 15.0607 12.555 14.9788C12.6675 14.8976 12.715 14.7532 12.6719 14.6207L11.0656 9.63316L15.2444 6.57748V6.5781C15.355 6.49561 15.4012 6.35185 15.3581 6.2206C15.3156 6.08935 15.1931 6.0006 15.055 6.0006H9.91068L8.30444 1.18124V1.18062C8.26006 1.04374 8.1288 0.953112 7.98444 0.959992H7.98439ZM8.00001 2.29374L9.37564 6.41998V6.4206C9.41814 6.55185 9.54127 6.64122 9.68001 6.6406H14.0738L10.4987 9.255V9.25563C10.3875 9.33688 10.3406 9.48062 10.3831 9.61251L11.7587 13.8807L8.1893 11.2712H8.18867C8.07617 11.1887 7.92368 11.1887 7.81117 11.2712L4.24173 13.8807L5.61736 9.61251H5.61673C5.65923 9.48063 5.61236 9.33687 5.50111 9.25563L1.92607 6.64123H6.31983V6.6406C6.45858 6.64123 6.5817 6.55185 6.6242 6.4206L7.99983 2.29436L8.00001 2.29374Z"
                        fill="#E9B200"
                      />
                    </svg>
                  </div>
                </div>
              </th>
              <th className="user-bank">
                <div className="user-tier bank">
                  <h1>₦200,000.00</h1>
                  <p>9912345678/Providus Bank</p>
                </div>
              </th>
            </tr>
          </table>
          <ul className="first-dashbox-list">
            <li className="general">General Details</li>
            <li>Documents</li>
            <li>Bank Details</li>
            <li>Loans</li>
            <li>Savings</li>
            <li>App and System</li>
          </ul>
        </article>
        <article className="second-dashbox">
          <div className="second-dashbox-main">
            <div className="second-dashbox-main-table">
              <h2>Personal information</h2>
              <div className="second-dashbox-main-table-info">
                <div>
                  <h1>FULL NAME</h1>
                  <p>Grace Effiom</p>
                </div>
                <div>
                  <h1>PHONE NUMBER</h1>
                  <p>07060780922</p>
                </div>
                <div>
                  <h1>EMAIL ADDRESS</h1>
                  <p>grace@gmail.com</p>
                </div>
                <div>
                  <h1>BVN</h1>
                  <p>07060780922</p>
                </div>
                <div>
                  <h1>GENDER</h1>
                  <p>Female</p>
                </div>
              </div>

              <div className="second-dashbox-main-table-info">
                <div>
                  <h1>MARITAL STATUS</h1>
                  <p>Single</p>
                </div>
                <div>
                  <h1>CHILDREN</h1>
                  <p>None</p>
                </div>
                <div>
                  <h1>TYPE OF RESIDENCE</h1>
                  <p>Parent's Apartment</p>
                </div>
              </div>
            </div>
          </div>
          <div className="second-dashbox-main">
            <div className="second-dashbox-main-table">
              <h2>Education and Employment</h2>
              <div className="second-dashbox-main-table-info">
                <div>
                  <h1>LEVEL OF EDUCATION</h1>
                  <p>B.Sc</p>
                </div>
                <div>
                  <h1>EMPLOYMENT STATUS</h1>
                  <p>Employed</p>
                </div>
                <div>
                  <h1>SECTOR OF EMPLOYMENT</h1>
                  <p>FinTech</p>
                </div>
                <div>
                  <h1>DURATION OF EMPLOYMENT</h1>
                  <p>2 years</p>
                </div>
              </div>

              <div className="second-dashbox-main-table-info">
                <div>
                  <h1>OFFICE EMAIL</h1>
                  <p>grace@lendsqr.com</p>
                </div>
                <div>
                  <h1>MONTHLY INCOME</h1>
                  <p>₦200,000.00- ₦400,000.00</p>
                </div>
                <div>
                  <h1>LOAN REPAYMENT</h1>
                  <p>40,000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="second-dashbox-main">
            <div className="second-dashbox-main-table">
              <h2>Socials</h2>
              <div className="second-dashbox-main-table-info">
                <div>
                  <h1>Twitter</h1>
                  <p>@grace_effiom</p>
                </div>
                <div>
                  <h1>FACEBOOK</h1>
                  <p>GRACE Effiom</p>
                </div>
                <div>
                  <h1>INSTAGRAM</h1>
                  <p>@grace_effiom</p>
                </div>
              </div>

              <div className="second-dashbox-main-table-info">
                <div>
                  <h1>MARITAL STATUS</h1>
                  <p>Single</p>
                </div>
                <div>
                  <h1>CHILDREN</h1>
                  <p>None</p>
                </div>
                <div>
                  <h1>TYPE OF RESIDENCE</h1>
                  <p>Parent's Apartment</p>
                </div>
              </div>
            </div>
          </div>
          <div className="second-dashbox-main">
            <div className="second-dashbox-main-table">
              <h2>Guarantor</h2>
              <div className="second-dashbox-main-table-info">
                <div>
                  <h1>FULL NAME</h1>
                  <p>Debby Ogana</p>
                </div>
                <div>
                  <h1>PHONE NUMBER</h1>
                  <p>07060780922</p>
                </div>
                <div>
                  <h1>EMAIL ADDRESS</h1>
                  <p>grace@gmail.com</p>
                </div>
                <div>
                  <h1>RELATIONSHIP</h1>
                  <p>Sister</p>
                </div>
              </div>

              <div className="second-dashbox-main-table-info">
                <div>
                  <h1>MARITAL STATUS</h1>
                  <p>Single</p>
                </div>
                <div>
                  <h1>CHILDREN</h1>
                  <p>None</p>
                </div>
                <div>
                  <h1>TYPE OF RESIDENCE</h1>
                  <p>Parent's Apartment</p>
                </div>
              </div>
            </div>
          </div>
          <div className="second-dashbox-main">
            <div className="second-dashbox-main-table">
              <h2>Guarantor</h2>
              <div className="second-dashbox-main-table-info">
                <div>
                  <h1>FULL NAME</h1>
                  <p>Debby Ogana</p>
                </div>
                <div>
                  <h1>PHONE NUMBER</h1>
                  <p>07060780922</p>
                </div>
                <div>
                  <h1>EMAIL ADDRESS</h1>
                  <p>debby@gmail.com</p>
                </div>
                <div>
                  <h1>RELATIONSHIP</h1>
                  <p>Sister</p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default UserDetails;
