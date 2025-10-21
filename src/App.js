import './App.css';
import Login from './Login';
import Lectreports from './Lectreports';
import Lectclasses from './Lectclasses';
import Lectrate from './Lectrate';
import Lectmonitor from './Lectmonitor';
import Quiz from './Quiz';
import Rating from './Rating';
import Progress from './Progress';
import Register from './Register';
import Studedentsection from './Studedentsection';
import Prl from './Prl';
import Landpage from './Landpage';
import Lectdash from './Lectdash';
import Strating from './Strating';
import Stmonitor from './Stmonitor';
import Prlmonitor from './Prlmonitor';
import Prcourses from './Prcourse';
import AddCourse from './Addcourse';
import Pldash from './Pldash';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/prlmon' element={<Prlmonitor/>}/>
        <Route path='/pldash' element={<Pldash/>}/>
        <Route path='/' element={<Landpage/>}/>
        <Route path="/addcourse" element={<AddCourse />} />
        <Route path='/pcourses' element={<Prcourses/>}/>
        <Route path='/smonitor' element={<Stmonitor/>}/>
        <Route path='/srate' element={<Strating/>}/>
        <Route path="/lectdash" element ={<Lectdash/>}/>
        <Route path="/prls" element={<Prl/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />} />
        <Route path="/classed" element={<Lectclasses/>}/>
        <Route path="/report" element={<Lectreports/>}/>
        <Route path='/lec/monitor' element={<Lectmonitor/>}/>
        <Route path='/lec/rate' element={<Lectrate/>}/>
        <Route path="/stud" element={<Studedentsection/>}/>
        
        <Route path= '/stu/quiz' element={<Quiz/>}/>
        <Route path='/stu/rate' element={<Rating/>}/>
        <Route path='/stu/prog' element={<Progress/>}/>

       

      </Routes>
    </BrowserRouter>
    
    
      
    

  </>
  );
}

export default App;
