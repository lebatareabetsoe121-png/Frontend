import React from "react";
import limkologo from "./limkologo.jpg";

function Stmonitor() {
  // Example data
  const classes = [
    { name: "Web Programming", attendance: "90%", grade: "A-", lecturer: "Mr Neo Thokoana" },
    { name: "Data Networking", attendance: "100%", grade: "B+", lecturer: "Mr Thutho Molapo" },
    { name: "Intro to Computer Architecture", attendance: "95%", grade: "A", lecturer: "Prof Khanya Lebata" },
    { name: "Discrete Mathematics", attendance: "95%", grade: "B", lecturer: "Dr Chavhula Moyo" },
    { name: "OOP Java II", attendance: "100%", grade: "A", lecturer: "Ms Tsebo Mahase " },
    { name: "Data Graphics", attendance: "95%", grade: "A", lecturer: "Ms Ntho Nkhato" },
  ];

  const upcoming = [
    { course: "Web Programming", day: "Monday", time: "10:00 AM", venue: "Room B4" },
    { course: "Database Systems", day: "Wednesday", time: "1:00 PM", venue: "Room C2" },
    { course: "Software Engineering", day: "Friday", time: "9:00 AM", venue: "Room A1" },
  ];

  return (
    <div className="student-monitoring">
      {/* Header */}
      <header className="monitor-header">
        <img src={limkologo} alt="Logo" className="monitor-logo" />
        <div>
          <h1>Student Monitoring</h1>
          <p>Track attendance, grades, and upcoming classes</p>
        </div>
      </header>

      {/* Summary Cards */}
      <section className="monitor-stats">
        <div className="stat-card">
          <h3>Total Classes</h3>
          <p>{classes.length}</p>
        </div>
        <div className="stat-card">
          <h3>Average Attendance</h3>
          <p>
            {Math.round(
              classes.reduce((a, c) => a + parseInt(c.attendance), 0) /
                classes.length
            )}
            %
          </p>
        </div>
        <div className="stat-card">
          <h3>Average Grade</h3>
          <p>
            {(() => {
              const gradeMap = { "A": 4, "A-": 3.7, "B+": 3.3, "B": 3, "B-": 2.7 };
              const avg =
                classes.reduce((a, c) => a + (gradeMap[c.grade] || 0), 0) /
                classes.length;
              return avg.toFixed(2);
            })()}
          </p>
        </div>
      </section>

      <section className="monitor-table">
        <h2>Class Overview</h2>
        <table>
          <thead>
            <tr>
              <th>Class</th>
              <th>Lecturer</th>
              <th>Attendance</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((cls, idx) => (
              <tr key={idx}>
                <td>{cls.name}</td>
                <td>{cls.lecturer}</td>
                <td>{cls.attendance}</td>
                <td>{cls.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Upcoming Classes */}
      <section className="monitor-upcoming">
        <h2>Upcoming Classes</h2>
        <ul>
          {upcoming.map((cls, idx) => (
            <li key={idx}>
              📚 {cls.course} - {cls.day} at {cls.time} ({cls.venue})
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Stmonitor;
