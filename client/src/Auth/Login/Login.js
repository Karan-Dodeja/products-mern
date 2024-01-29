import "./Login.css";

export const Login = () => {
  return (
    <div className="login">
      <div className="login-header">
        <h1>Login to Download</h1>
      </div>
      <div>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className="login-email"
          required
        />{" "}
        <br />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          className="login-password"
          required
        />{" "}
        <br />
        <button className="login-button">Login</button>
        <button className="signup-button">Sign Up</button>
        <br />
      </div>
    </div>
  );
};
