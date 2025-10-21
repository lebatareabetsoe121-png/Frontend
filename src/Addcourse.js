import React, { useState } from "react";

function AddCourse() {
  const [formData, setFormData] = useState({
    course_code: "",
    course_name: "",
    lecturer_name: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/add-course", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert(data.message);

      if (res.ok) {
        window.location.href = "/pcourses";
      }
    } catch (err) {
      console.error("Error adding course:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="add-course-page">
      <h1>Add New Course</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Course Code"
          value={formData.course_code}
          onChange={(e) =>
            setFormData({ ...formData, course_code: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Course Name"
          value={formData.course_name}
          onChange={(e) =>
            setFormData({ ...formData, course_name: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Lecturer Name"
          value={formData.lecturer_name}
          onChange={(e) =>
            setFormData({ ...formData, lecturer_name: e.target.value })
          }
          required
        />
        <button type="submit">Add Course</button>
      </form>
    </div>
  );
}

export default AddCourse;
