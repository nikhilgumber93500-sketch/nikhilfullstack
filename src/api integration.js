import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login3 from "./Login3";
import Dashboard1 from "./Dashboard1";
import Header3 from "./Header3";
import Sidebar from "./Sidebar";

function App() {
  return (
    <BrowserRouter>

      <Header3 />

      <div
        className="d-flex align-items-stretch"
        style={{ alignItems: "stretch" }}
      >

        <Sidebar />

        <div className="flex-grow-1 p-4">

          <Routes>
            <Route path="/" element={<Login3 />} />
            <Route path="/dashboard" element={<Dashboard1 />} />
          </Routes>

        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;