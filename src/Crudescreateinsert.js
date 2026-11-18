import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Header3 from "./Header3";
import Login3 from "./Login3";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Website open → Dashboard */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        {/* Login Page */}
        <Route
          path="/"
          element={<Login3 />}
        />

        {/* Dashboard Page */}
       

      </Routes>
    </BrowserRouter>
  );
}

export default App;