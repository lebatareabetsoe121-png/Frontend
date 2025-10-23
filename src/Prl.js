import React from "react";
import { BookOpen, FileText, Eye, Star, Users, CalendarDays } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Prl() {
  const navigate = useNavigate();
  const boxes = [
    { id: 1, title: "Courses", subtitle: "View all courses & lectures under your stream", icon: <BookOpen />, path:"/pcourses" },
    { id: 2, title: "Reports", subtitle: "View lecturer reports & add feedback", icon: <FileText />, path:"/plreport" },
    { id: 3, title: "Monitoring", subtitle: "Monitor lecturer performance & activities", icon: <Eye />, path:"/prlmon" },
    { id: 4, title: "Rating", subtitle: "Rate lecturer performance & give feedback", icon: <Star />, path:"/prate" },
    { id: 5, title: "Classes", subtitle: "View classes in your stream", icon: <Users />, path:"/pclasses" }
  ];

  const stats = [
    { label: "Active Lecturers", value: 18 },
    { label: "Total Classes", value: 12 },
    { label: "Pending Reports", value: 4 },
    { label: "Feedbacks Given", value: 26 },
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Principal Lecturer Dashboard</h1>
       
      </div>

      <div className="welcome-banner">
        <div>
          <h2 className="welcome-title">Welcome back, Principal!</h2>
          <p className="welcome-subtitle">Here’s what’s happening in your department today.</p>
        </div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3050/3050525.png"
          alt="Dashboard Illustration"
          className="welcome-img"
        />
      </div>

     
      <div className="stats-section">
        {stats.map((s, i) => (
          <div key={i} className="stat-box"  >
            <h3 className="stat-value">{s.value}</h3>
            <p className="stat-label">{s.label}</p>
          </div>
        ))}
      </div>

   
      <div className="box-grid">
        {boxes.map((box, i) => (
          <div key={i} className="feature-box" onClick={() =>navigate(box.path)}>
            <div className="feature-icon">{box.icon}</div>
            <h3 className="feature-title">{box.title}</h3>
            <p className="feature-subtitle">{box.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Prl;
