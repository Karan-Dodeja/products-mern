export const Login = () => {
  return (
    <div className="login-component">
      <div>
        <h1 className="login-header">Login to Download</h1>
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
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          className="login-password"
          required
        />{" "}
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </div>
  );
};