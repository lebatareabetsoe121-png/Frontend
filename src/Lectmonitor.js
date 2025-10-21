import React from "react";
import limkologo from "./limkologo.jpg";

function Lectmonitor() {
  
  const classes = [
    { name: "Web Programming", students: 35, present: 32, attendance: "91%" },
    { name: "Data Networking", students: 28, present: 25, attendance: "89%" },
    { name: "Software Engineering", students: 40, present: 38, attendance: "95%" },
    { name: "OOP Java II", students: 30, present: 27, attendance: "90%" },
     { name: "Artificial Intelligence I", students: 40, present: 40, attendance: "100%" },
  ];

  return (
    <div className="monitoring-dashboard">
      
      <header className="monitor-header">
        <img src={limkologo} alt="Logo" className="monitor-logo" />
        <div>
          <h1>Lecturer Monitoring</h1>
          <p>Keep track of class attendance and performance</p>
        </div>
      </header>

      
      <section className="monitor-stats">
        <div className="stat-card">
          <h3>Total Classes</h3>
          <p>{classes.length}</p>
        </div> 
        <div className="stat-card">
          <h3>Total Students</h3>
          <p>{classes.reduce((a, c) => a + c.students, 0)}</p>
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
      </section>

      <section className="monitor-table">
        <h2>Class Attendance Overview</h2>
        <table>
          <thead>
            <tr>
              <th>Class</th>
              <th>Total Students</th>
              <th>Present</th>
              <th>Attendance</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((cls, idx) => (
              <tr key={idx}>
                <td>{cls.name}</td>
                <td>{cls.students}</td>
                <td>{cls.present}</td>
                <td>{cls.attendance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Lectmonitor;
