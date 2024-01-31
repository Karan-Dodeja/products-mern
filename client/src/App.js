import { Login } from "./Auth/Login";
import { Register } from "./Auth/Register";
import { Dashboard } from "./Components/Dashboard";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
