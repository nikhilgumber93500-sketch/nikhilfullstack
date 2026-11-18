import { Link } from "react-router-dom";
import "./Sidebar.css";
function Sidebar() {
  return (
    <aside className="sidebar">
      <h4 className="text-warning sidebar-title">
        Softech Admin
      </h4>
      <div className="sidebar-links">
        <Link to="/dashboard">
          Dashboard
        </Link>
        <Link to="/dashboard/Teacher">
          Teachers
        </Link>
        <Link to="/dashboard/Student2">
          Students
        </Link>
        <Link to="/dashboard/Course3">
          Courses
        </Link>
      </div>
    </aside>
  );
}
export default Sidebar;