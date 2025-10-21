import React from "react";

function Lectclasses(){
     const lectures = [
    {id: 1, module: "C++ Programming", course: "BSc Software Engineering Y1S1", venue:"LR 4", time:"Monday 8:30-10:30"},
    {id: 2,module: "Web Programming",course: "BSc Information Technology Y2S1  ",venue: "Room C3",time: "Wednesday 14:00 - 16:00"},
    {id: 3,module: "Human-Computer Interaction", course: "BSc Software Engineering Y3S1", venue:"Room R4", time:"Thursday 12:00-14:00"},
    {id: 4, module:"OOP JAVA 2", course:" Diploma Business IT Y3S1", venue:"LH 16", time:"Monday 14:30-16:30"},
    {id: 5, module:"Artificial Intelligence", course:"Bsc Business IT Y4S1", venue:"LR 14", time:"Monday 15:00-17:00"},
    {id:6, module:"Data Networking", course:"Bsc Software Engineering Y2S1", venue:"Hall 5", time:"Tuesday 12:00- 14:00"},
    {id: 7, module:"Data Networking", course:"Diploma Software Enginnering Y2S1", venue:"LR7", time:"Friday 8:00-10:00"}
  ];

  

    return(
        <> 
        <div className="side-container">
        <div className="sidebar">
            <h2>My Classes</h2>
             <ul>
          {lectures.map((lect) => (
            <li key={lect.id}>{lect.module}</li>
          ))}
        </ul>
      </div>
      
        <h1 className="bba">Lecturer's Class Stream</h1>
       <div className="main-sec"> 
        <h2 style={{color:"white"}}>Class Overview</h2>
        <div className="class-dash">
          {lectures.map((lect) => (

            
            <div key={lect.id} className="class-box">

              <p><span className="label">Course:</span> {lect.course}</p>
              <p><span className="label">Module:</span> {lect.module}</p>
              <p><span className="label">Venue:</span> {lect.venue}</p>
              <p><span className="label">Time:</span> {lect.time}</p>
            </div>
        

          ))}
        </div>
      </div>
      </div>
        

      
        </>
    );
}
export default Lectclasses;