import React from "react";
import { Link } from "react-router-dom";
import { Users, BookOpen, Star, ClipboardList, Eye } from "lucide-react";
import limkologo from "./limkologo.jpg";

function Landpage() {
  return (
    <div className="landing-container">
    
      <nav className="landing-nav">
        <div className="landing-logo">
          <img src={limkologo} alt="Logo" />
          <h2>LUCT Reporting System</h2>
        </div>
        <div className="landing-links">
          <Link to="#features">Features</Link>
          <Link to="#roles">Roles</Link>
          <Link to="#about">About</Link>
          <Link to="/login" className="landing-login-btn">
            Login
          </Link>
        </div>
      </nav>

      <section className="landing-hero">
        <div className="landing-hero-text">
          <h1>
            Enforcing Education Through <span> Reporting</span>
          </h1>
          <p>
            A digital platform connecting Limkokokwing University <strong>Lecturers</strong>, <strong>Students</strong>, <strong>Principal Lecturers</strong>, 
            and <strong>Program Leaders</strong> to streamline academic monitoring, reports, and performance tracking.
          </p>
          <Link to="/login" className="landing-getstarted-btn">
            Get Started →
          </Link>
        </div>
      </section>

      <section id="features" className="landing-features">
        <h2>Main Features</h2>
        <div className="landing-feature-grid">
          <div className="landing-feature-card">
            <ClipboardList className="landing-icon" />
            <h3>Reports</h3>
            <p>Submit and view weekly lecture reports with full course tracking.</p>
          </div>
          <div className="landing-feature-card">
            <Eye className="landing-icon" />
            <h3>Monitoring</h3>
            <p>Track class activities, lecturer performance, and attendance analytics.</p>
          </div>
          <div className="landing-feature-card">
            <BookOpen className="landing-icon" />
            <h3>Courses</h3>
            <p>Manage all courses and modules under your stream seamlessly.</p>
          </div>
          <div className="landing-feature-card">
            <Star className="landing-icon" />
            <h3>Ratings</h3>
            <p>Students rate lecturers for performance insights and feedback.</p>
          </div>
        </div>
      </section>

      
      <section id="roles" className="landing-roles">
        <h2>Who Uses This System?</h2>
        <div className="landing-role-grid">
          <div className="landing-role">
            <Users className="landing-role-icon" />
            <h3>Students</h3>
            <p>Monitor class performance and rate lecturers weekly.</p>
          </div>
          <div className="landing-role">
            <BookOpen className="landing-role-icon" />
            <h3>Lecturers</h3>
            <p>Submit weekly reports and track your own classes and attendance.</p>
          </div>
          <div className="landing-role">
            <Eye className="landing-role-icon" />
            <h3>Principal Lecturers</h3>
            <p>Monitor lecturers under their stream and view performance reports.</p>
          </div>
          <div className="landing-role">
            <Star className="landing-role-icon" />
            <h3>Program Leaders</h3>
            <p>Oversee all courses, assign modules, and analyze overall reports.</p>
          </div>
        </div>
      </section>

      <footer className="landing-footer" id="about">
        <p>© {new Date().getFullYear()} Lecturer Reporting System. All rights reserved.</p>
        <p>Developed by <strong>Reabetsoe M Lebata</strong>.</p>
      </footer>
    </div>
  );
}

export default Landpage;
