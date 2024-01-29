import { Login } from "./Auth/Login";
import { Register } from "./Auth/Register";
import { Table, Modal } from "./Components/Table";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/login" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
