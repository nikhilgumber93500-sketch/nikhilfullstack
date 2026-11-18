import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./About";
import Courses from "./Courses";
import Softech from "./Softech";
import Questions from "./Question";
import Contact from "./Contact";
import Login from "./Login";

import Dashboard1 from "./Dashboard1";

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Softech />} />

        <Route path="/about" element={<About />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/question" element={<Questions />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard1 />} />

        <Route
          path="/dashboard/Student2"
          element={<Dashboard1 />}
        />

        <Route
          path="/dashboard/Teacher"
          element={<Dashboard1 />}
        />

        <Route
          path="/dashboard/Course3"
          element={<Dashboard1 />}
        />

      </Routes>
    </Router>
  );
}

export default App;