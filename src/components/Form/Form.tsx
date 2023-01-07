import React from "react";

const Form = () => {
  return (
    <div>
      <form
        className="filter-form"
        onSubmit={(e: React.SyntheticEvent) => {
          e.preventDefault();
        }}
      >
        <div className="filter-form-input">
          <label>Organization</label>
          <div className="filter-form-input-select">
            <select>
              <option>Select</option>
              <option>Lendsqr</option>
              <option>Irorun</option>
              <option>lendstar</option>
            </select>
          </div>
        </div>
        <div className="filter-form-input">
          <label>Username</label>
          <input type="text" placeholder="User" />
        </div>
        <div className="filter-form-input">
          <label>Email</label>
          <input type="email" placeholder="Email" />
        </div>
        <div className="filter-form-input">
          <label>Date</label>
          <input type="date" placeholder="Date" />
        </div>
        <div className="filter-form-input">
          <label>Phone Number</label>
          <input type="text" placeholder="Phone Number" />
        </div>
        <div className="filter-form-input">
          <label>Status</label>
          <div className="filter-form-input-select">
            <select>
              <option>Select</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
        </div>
        <div className="filter-form-input form-btns">
          <button className="reset">Reset</button>
          <button className="filter">Filter</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
