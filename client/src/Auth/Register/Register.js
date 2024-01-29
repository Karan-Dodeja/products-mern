import './Register.css';

export const Register = () => {
  return (
    <div className="register">
      <div className="register-header">
        <h1>New User</h1>
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
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter Password"
          className="register-password"
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
        <button className='register-button'>Submit</button>
      </div>
    </div>
  );
};
