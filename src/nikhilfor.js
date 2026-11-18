import './App.css';

import Header3 from './Header3';
import './Header.css';

import './Sidebar.css';
import Sidebar from './Sidebar';

import './Student.css';
import Student1 from './Student1';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Dashboard from './Dashboard';
import Teacher from './Teacher';
import Courselist from './Courselist';
import Logout from './Login3';
import Login1 from './Login1';

function App() {

  return (
    <>

      <Router>

        <Header3 />

        {/* Sidebar */}
        <Sidebar />

        <Routes>

          <Route
            path="/"
            element={<Login1 />}
          />

          <Route
            path="/1"
            element={<Teacher />}
          />

          <Route
            path="/2"
            element={<Courselist />}
          />

          <Route
            path="/3"
            element={<Student1 />}
          />

          <Route
            path="/c"
            element={<Logout />}
          />

        </Routes>

      </Router>

    </>
  );
}

export default App;