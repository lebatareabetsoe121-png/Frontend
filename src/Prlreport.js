
import React, { useEffect, useState } from "react";

function Prlreport() {
    const lecturer_name = localStorage.getItem("lecturer_name");


  const [reports, setReports] = useState([]);

  useEffect(() => {
     fetch(`http://localhost:5000/lecturer_reports`)
      .then((res) => res.json())
      .then((data) => setReports(data))
      .catch((err) => console.error("Error loading reports:", err));
    
   
  }, []);

  return (
  <div className="lecturer-ratings">
    <h2>Class Reports</h2>
    {reports.length === 0 ? (
      <p>No reports yet.</p>
    ) : (
      reports.map((report, idx) => (
        <div key={idx} className="rating-card">
          <p><strong>Course:</strong> {report.course_name} ({report.course_code})</p>
          <p><strong>Faculty:</strong> {report.faculty_name}</p>
          <p><strong>Class:</strong> {report.class_name}</p>
          <p><strong>Lecturer:</strong> {report.lecturer_name}</p>
          <p><strong>Attendance:</strong> {report.present_students}/{report.registered_students}</p>
          <p><strong>Venue:</strong> {report.venue}</p>
          <p><strong>Scheduled Time:</strong> {report.scheduled_time}</p>
          <p><strong>Topic:</strong> {report.topic}</p>
          <p><strong>Learning Outcome:</strong> {report.learning_outcome}</p>
          <p><strong>Recommendation:</strong> {report.recommendation}</p>
          <p><strong>Week:</strong> {report.week}</p>
        </div>
      ))
    )}
  </div>
);}

export default Prlreport;
