import { useState } from "react";
import limkologo from './limkologo.jpg'

function Lectreports(){

    const [faculty, setFaculty]= useState("");
    const [classname, setClass] = useState("");
    const [week, setWeek]= useState("");
    const [course,  setCourse]= useState("");
    const [code, setCode]= useState("");
    const [name, setName]= useState("");
    const [registered, setRegistered]= useState("");
    const [present, setPresent] = useState("");
    const [venue, setVenue] = useState("");
    const [time, setTime] = useState("");
    const [topic, setTopic] = useState("");
    const [outcome, setOutcome] = useState("");
    const [recommendation, setRec] = useState("");

    const handleSub= async (e) =>{
        e.preventDefault();
        
    const reportData = {
      faculty_name: faculty,
      class_name: classname,
      week,
      course_name: course,
      course_code: code,
      lecture_name: name,
      registered_students: registered,
      present_students: present,
      venue,
      scheduled_time: time,
      topic,
      learning_outcome: outcome,
      recommendation,
    };

    try {
      const response = await fetch("http://localhost:5000/report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reportData)
      });

      const data = await response.json();
      alert(data.message);

      if (response.ok) {
        setFaculty("");
        setClass("");
        setWeek("");
        setCourse("");
        setCode("");
        setName("");
        setRegistered("");
        setPresent("");
        setVenue("");
        setTime("");
        setTopic("");
        setOutcome("");
        setRec("");
      }

    } catch (err) {
      alert("Error submitting report: " + err.message);
    }
  };

    return( 
        <>
        <div className="formg"> 
                <h2 className="ftitle">Lecturers' Report Form</h2>
                <img src={limkologo} alt="App Logo" className="linkk" />

                <div className="fbox">

                <div className="fcont"> 
                <form onSubmit={handleSub}>

                    <div className="input-group">
                        <label>Faculty Name</label>
                        <input type="text" value={faculty} onChange={(e) => setFaculty(e.target.value)} placeholder="Enter faculty name" />
                    </div>

                    <div className="input-group">
                        <label>Class Name</label>
                        <input type="text" value={classname} onChange={(e) => setClass(e.target.value)} placeholder="Enter class name" />
                    </div>

                    <div className="input-group">
                        <label>Week of Reporting</label>
                        <input type="week" value={week} onChange={(e) => setWeek(e.target.value)} placeholder="Enter week" />
                    </div>

                    <div className="input-group">
                        <label>Course Name</label>
                        <input type="text" value={course} onChange={(e) => setCourse(e.target.value)} placeholder="Enter course name" />
                    </div>

                    <div className="input-group">
                        <label>Course code</label>
                        <input type="text" value={code} onChange={(e) => setCode(e.target.value)} placeholder="Enter course code" />
                    </div>

                    <div className="input-group">
                        <label>Lecture Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
                    </div>

                    <div className="input-group">
                        <label>Registered Students</label>
                        <input type="number" value={registered} onChange={(e) => setRegistered(e.target.value)} placeholder="Enter registered students" />
                    </div>

                    <div className="input-group">
                        <label>Presents students</label>
                        <input type="number" value={present} onChange={(e) => setPresent(e.target.value)} placeholder="Enter students present" />
                    </div>

                    <div className="input-group">
                        <label>Lecture Venue</label>
                        <input type="text" value={venue} onChange={(e) => setVenue(e.target.value)} placeholder="Enter venue" />
                    </div>

                    <div className="input-group">
                        <label>Scheduled Lecture Time</label>
                        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} placeholder="Enter lecture time" />
                    </div>

                    <div className="input-group">
                        <label>Topic</label>
                        <input type="text" value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="Enter topic covered" />
                    </div>

                    <div className="input-group">
                        <label>Learning outcome</label>
                        <input type="text" value={outcome} onChange={(e) => setOutcome(e.target.value)} placeholder="Enter learning outcome" />
                    </div>

                    <div className="input-group">
                        <label>Lecture recommendation </label>
                        <input type="text" value={recommendation} onChange={(e) => setRec(e.target.value)} placeholder="give recommendation" />
                    </div>

                      <button type="submit" class="btn btn-primary">Submit</button>
                
                </form>
                </div>
                </div>

            </div>
       
       
        </>
    )
}
export default Lectreports;