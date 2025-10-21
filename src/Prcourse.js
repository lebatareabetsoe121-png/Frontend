import React from "react";
import { useState } from "react";
import { Globe, LineChart, Home, Library, UserSquare, Trash2 } from "lucide-react";

function Prcourses() {
  const [courses, setCourses] = useState([
  { code: "CSC201", name: "Web Development", lecturer: "Dr. Mokoena", credits: 3 },
  { code: "CSC202", name: "Database Systems", lecturer: "Ms. Thulo", credits: 4 },
  { code: "CSC203", name: "Networks & Security", lecturer: "Mr. Rasekoai", credits: 3 },
  { code: "CSC204", name: "Software Engineering", lecturer: "Dr. Ntleko", credits: 4 },
  { code: "CSC205", name: "Mobile App Development", lecturer: "Ms. Khiba", credits: 3 },
]);

  const lecturers = [
    { name: "Dr. Mokoena", email: "mokoena@limkokwing.ac.ls", courses: 2, performance: "Excellent" },
    { name: "Ms. Thulo", email: "thulo@limkokwing.ac.ls", courses: 1, performance: "Good" },
    { name: "Mr. Rasekoai", email: "rasekoai@limkokwing.ac.ls", courses: 1, performance: "Good" },
    { name: "Dr. Ntleko", email: "ntleko@limkokwing.ac.ls", courses: 1, performance: "Excellent" },
    { name: "Ms. Khiba", email: "khiba@limkokwing.ac.ls", courses: 1, performance: "Average" },
  ];
const deleteCourse = async (id) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this course?");
  if (!confirmDelete) return; // stop if they clicked "Cancel"

  try {
    const res = await fetch(`http://localhost:5000/delete-course/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setCourses(courses.filter(course => course.id !== id));
      alert("Course deleted successfully!");
    } else {
      alert("Failed to delete the course. Please try again.");
    }
  } catch (error) {
    console.error("Error deleting course:", error);
    alert("An error occurred while deleting the course.");
  }
};



  return (
    <div className="prl-container">
      <aside className="sbar">
        <h2>PRL Dashboard</h2>
        <ul>
          <li><Home size={18}/> Overview</li>
          <li><Library size={18}/>Courses</li>
          <li><UserSquare size={18}/> Lecturers</li>
          <li><LineChart size={18}/> Reports</li>
          <li><Globe size={18}/> Settings</li>
        </ul>
      </aside>

      <main className="main-content">
        <h1>Courses & Lecturers Overview</h1>

        <div className="table-section">
          <div className="table-header">
  <h2>Courses Under Your Stream</h2>
  <button
    className="add-btn"
    onClick={() => window.location.href = "/addcourse"}
    title="Add New Course"
  >
    ➕
  </button>
</div>

<table className="data-table">

            <thead>
              <tr>
                <th>Course Code</th>
                <th>Course Name</th>
                <th>Lecturer</th>
                
              </tr>
            </thead>
            <tbody>
              {courses.map((c, i) => (
                <tr key={i}>
                  <td>{c.code}</td>
                  <td>{c.name}</td>
                  <td>{c.lecturer}</td>
                  <button className="delete-btn" onClick={() => deleteCourse(c.code)}>
                    <Trash2 size={18}/>
                  </button>
                 
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="table-section">
          <h2>Lecturers in Your Stream</h2>
          <table className="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Courses Assigned</th>
                <th>Performance</th>
              </tr>
            </thead>
            <tbody>
              {lecturers.map((l, i) => (
                <tr key={i}>
                  <td>{l.name}</td>
                  <td>{l.email}</td>
                  <td>{l.courses}</td>
                  <td>{l.performance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Prcourses;