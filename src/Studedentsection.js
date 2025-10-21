import React from "react";
import { Link } from "react-router-dom";
import { Eye, Star, LogOut, User } from "lucide-react";

function Studedentsection() {
  const boxes = [
    {
      title: "Monitor Classes",
      subtitle: "Track your classes, attendance & lecturer activity",
      icon: <Eye className="stu-icon" />,
      path: "/smonitor",
    },
    {
      title: "Rate Lecturers",
      subtitle: "Give feedback and rate lecturers’ performance",
      icon: <Star className="stu-icon" />,
      path: "/srate",
    },
  ];

  return (
    <div className="stu-container">
  
      <nav className="stu-navbar">
        <div className="stu-logo">🎓 Student Portal</div>
        <div className="stu-nav-right">
          <Link to="/stu/profile" className="stu-profile">
            <User /> Profile
          </Link>
          <Link to="/" className="stu-logout">
            <LogOut /> Logout
          </Link>
        </div>
      </nav>

      <div className="stu-content">
        <h1 className="stu-title">Welcome, Student 👋</h1>
        <p className="stu-subtitle">Choose an option below to continue:</p>

        <div className="stu-grid">
          {boxes.map((box, index) => (
            <Link to={box.path} key={index} className="stu-card">
              <div className="stu-card-icon">{box.icon}</div>
              <h3>{box.title}</h3>
              <p>{box.subtitle}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Studedentsection;
