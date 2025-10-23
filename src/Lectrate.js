
import React, { useEffect, useState } from "react";

function Lectrate() {
    const lecturer_name = localStorage.getItem("lecturer_name");


  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    if (lecturer_name){
    fetch(`http://localhost:5000/ratings:lecturer_name`)
      .then((res) => res.json())
      .then((data) => setRatings(data))
      .catch((err) => console.error("Error loading ratings:", err));
    }
  }, [lecturer_name]);

  return (
    <div className="lecturer-ratings">
      <h2>{lecturer_name}'s Ratings</h2>
      {ratings.length === 0 ? (
        <p>No ratings yet.</p>
      ) : (
        ratings.map((r, idx) => (
          <div key={idx} className="rating-card">
            <p><strong>Student:</strong> {r.student_name}</p>
            <p><strong>Score:</strong> {r.score}/10</p>
            <p><strong>Feedback:</strong> {r.feedback}</p>
            <p><em>{new Date(r.created_at).toLocaleString()}</em></p>
          </div>
        ))
      )}
    </div>
  );
}

export default Lectrate;
