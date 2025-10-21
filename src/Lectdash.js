import React from "react";
import { BookOpen, FileText, Eye, Star, Calendar, Users } from "lucide-react";
import limkologo from "./limkologo.jpg";
import { useNavigate } from "react-router-dom";

function LectureDashboard() {
  const navigate = useNavigate();

  const menuItems = [
    { icon: <BookOpen size={18} />, label: "Classes",path:"/classed" },
    { icon: <FileText size={18} />, label: "Reports", path:"/report" },
    { icon: <Eye size={18} />, label: "Monitoring", path:"/lec/monitor" },
    { icon: <Star size={18} />, label: "Ratings", path:"/lec/rate" },
    { icon: <Calendar size={18} />, label: "Schedule" },
  ];

  const stats = [
    { title: "Total Classes", value: 8, path:"/classed" },
    { title: "Reports Submitted", value: 12,path:"/report" },
    { title: "Average Rating", value: "4.3★", path:"/lec/rate"},
    { title: "Students Taught", value: 230 },
  ];   

  return (
    <div className="lec-dashboard">
      
      <aside className="lec-sidebar">
        <div className="lec-logo">
          <img src={limkologo} alt="Logo" />
          <h2>Lecturer</h2>
        </div>

        <nav className="lec-menu">
          {menuItems.map((item, index) => (
            <div key={index} className="lec-menu-item" onClick={() =>navigate(item.path)}>
              
              <span className="lec-menu-icon">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </nav>
      </aside>


      <main className="lec-main">
        <header className="lec-header">
          <h1>Lecturer Dashboard</h1>
          <p>Welcome back Mr Ntho!</p>
        </header>

        <section className="lec-stats">
          {stats.map((stat, i) => (
            <div key={i} className="lec-stat-card" onClick={() => navigate(stat.path)}>
              <h3>{stat.title}</h3>
              <p>{stat.value}</p>
            </div>
          ))}
        </section>

        <section className="lec-activities">
          <h2>Recent Activities</h2>
          <ul>
            <li> Report submitted for “Web Programming”</li>
            <li> Class monitoring completed for Week 6</li>
            <li> Rated Database Systems - 4.5★</li>
            <li> Added new materials to “Software Engineering”</li>
            <li> Graded group assignment 2</li>
          </ul>
        </section>

      </main>
    </div>
  );
}

export default LectureDashboard;
