import { Table, Modal } from "./Components/Table";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/modal" element={<Modal />} />
      </Routes>
    </div>
  );
}

export default App;
