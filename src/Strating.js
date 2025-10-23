import React, { useState } from "react";
import limkologo from "./limkologo.jpg";

function Strating() {
  const lecturers = [
    { name: "Mr Baki Ntho", course: "Web Programming", rating: 4.2 },
    { name: "Prof. Khanya Lebata", course: "Intro to Computer Architecture", rating: 4.5 },
    { name: "Mrs Chavhula Moyo", course: "Discreete Mathematics", rating: 4.0 },
    { name: "Mr Neo Phiri", course: "Data Graphics", rating: 3.8 },
     { name: "Ms Tsebo Mahase", course: "OOP Java II", rating: 3.8 },
      { name: "Mr Thuto Molapo", course: "Data Networking", rating: 7 },
  ];

  const [selectedLecturer, setSelectedLecturer] = useState("");
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");

    const handleSubmit = async (e) => {
  e.preventDefault();

  const ratingData = {
    lecturer_name: selectedLecturer,
    student_name: "Thato Matlou", 
    score: score,
    feedback: feedback,
  };

  try {
    const res = await fetch("http://localhost:5000/rate-lecturer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ratingData),
    });

    if (res.ok) {
      alert("Rating submitted successfully!");
      setSelectedLecturer("");
      setScore(0);
      setFeedback("");
    } else {
      alert("Failed to submit rating.");
    }
  } catch (err) {
    console.error("Error submitting rating:", err);
    alert("Error submitting rating");
  }
};


  return (
    <div className="rating-dashboard">
      <header className="rating-header">
        <img src={limkologo} alt="Logo" className="rating-logo" />
        <div>
          <h1>Student Rating</h1>
          <p>Rate your lecturers and give feedback</p>
        </div>
      </header>

      <section className="rating-form-section">
        <form className="rating-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Select Lecturer</label>
            <select
              value={selectedLecturer}
              onChange={(e) => setSelectedLecturer(e.target.value)}
              required
            >
              <option value="">-- Select --</option>
              {lecturers.map((lec, idx) => (
                <option key={idx} value={lec.name}>
                  {lec.name} ({lec.course})
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Rating (1-10)</label>
            <input
              type="number"
              min="1"
              max="10"
              value={score}
              onChange={(e) => setScore(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Feedback</label>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Write your feedback..."
              required
            />
          </div>

          <button type="submit">Submit Rating</button>
        </form>
      </section>

      <section className="rating-overview">
        <h2>Last week's Ratings</h2>
        <div className="lecturer-cards">
          {lecturers.map((lec, idx) => (
            <div key={idx} className="lecturer-card">
              <h3>{lec.name}</h3>
              <p>{lec.course}</p>
              <p>⭐ {lec.rating}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Strating;
