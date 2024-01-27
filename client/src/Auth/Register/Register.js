export const Register = () => {
  return (
    <div className="register-component">
      <div>
        <h1 className="register-header">New User</h1>
      </div>
      <div>
        <input
          type="text"
          id="companyName"
          name="companyName"
          placeholder="Enter Company Name"
          className="register-companyName"
          required
        />
        <input
          type="text"
          id="location"
          name="location"
          placeholder="Enter Location"
          className="register-location"
          required
        />
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="Enter Phone Number"
          className="register-phoneNumber"
          required
        />
        <input
          type="email"
          id="emailId"
          name="emailId"
          placeholder="Enter Email ID"
          className="register-email"
          required
        />
        <textarea
          id="remarks"
          name="remarks"
          rows="4"
          cols="50"
          placeholder="Enter Remarks"
          className="register-remarks"
          required
        ></textarea>
        <button>Submit</button>
      </div>
    </div>
  );
};
