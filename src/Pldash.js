import React, { useState } from "react";
import { BookOpen, FileText, Users, Eye, Star, Layers } from "lucide-react";

function Pldash() {
  const [courses, setCourses] = useState([
    { code: "CSC301", name: "Software Engineering", lecturer: "Mr. Lebusa", modules: "4" },
    { code: "CSC302", name: "Data Analytics", lecturer: "Dr. Motlatsi", modules: "3" },
  ]);

  const [newCourse, setNewCourse] = useState({
    code: "",
    name: "",
    lecturer: "",
    modules: "",
  });

  const handleChange = (e) => {
    setNewCourse({ ...newCourse, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newCourse.code || !newCourse.name) {
      alert("Please fill all required fields.");
      return;
    }
    setCourses([...courses, newCourse]);
    setNewCourse({ code: "", name: "", lecturer: "", modules: "" });
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      setCourses(courses.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="pl-container">
    
      <aside className="pl-sidebar">
        <h2 className="pl-title">PL Dashboard</h2>
        <nav className="pl-nav">
          <ul>
            <li><BookOpen size={18} /> Courses</li>
            <li><FileText size={18} /> Reports</li>
            <li><Eye size={18} /> Monitoring</li>
            <li><Layers size={18} /> Classes</li>
            <li><Users size={18} /> Lecturers</li>
            <li><Star size={18} /> Rating</li>
          </ul>
        </nav>
      </aside>

    
      <main className="pl-main">
        <h1>Program Leader Overview</h1>

        <div className="pl-stats">
          <div className="stat-card">
            <BookOpen className="icon" />
            <h3>Total Courses</h3>
            <p>{courses.length}</p>
          </div>

          <div className="stat-card">
            <Users className="icon" />
            <h3>Lecturers</h3>
            <p>12</p>
          </div>

          <div className="stat-card">
            <FileText className="icon" />
            <h3>Reports</h3>
            <p>8</p>
          </div>
        </div>

        <section className="course-section">
          <h2>Manage Courses</h2>
          <form onSubmit={handleAdd} className="course-form">
            <input
              type="text"
              name="code"
              placeholder="Course Code"
              value={newCourse.code}
              onChange={handleChange}
            />
            <input
              type="text"
              name="name"
              placeholder="Course Name"
              value={newCourse.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="lecturer"
              placeholder="Assigned Lecturer"
              value={newCourse.lecturer}
              onChange={handleChange}
            />
            <input
              type="number"
              name="modules"
              placeholder="Modules"
              value={newCourse.modules}
              onChange={handleChange}
            />
            <button type="submit">➕ Add</button>
          </form>

          <table className="course-table">
            <thead>
              <tr>
                <th>Course Code</th>
                <th>Course Name</th>
                <th>Lecturer</th>
                <th>Modules</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((c, i) => (
                <tr key={i}>
                  <td>{c.code}</td>
                  <td>{c.name}</td>
                  <td>{c.lecturer}</td>
                  <td>{c.modules}</td>
                  <td>
                    <button className="delete-btn" onClick={() => handleDelete(i)}>
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default Pldash;
