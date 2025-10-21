import React, {useState} from "react";
import backer from './backer.gif';
import Banner from './Banner';
import limkologo from './limkologo.jpg';
import { Link } from "react-router-dom";

function Login(){
    const [username, changeName] = useState("");
    const [email, changeEmail] =useState("");
    const [password, changePass] = useState("");
    const [error, changeError] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState("");

    const submission= async (e)=>{
        e.preventDefault();

        if(!username || !password || !email){
        changeError("Enter both Username and password");
        return;
        }
        changeError("");

         try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
 
      const data = await res.json();

      if (res.ok) {
        setMessage("Logged in  successfully!");
        localStorage.setItem("token", data.token);
        localStorage.setItem("lecturer_name", data.user.full_name);

        if (data.user.role === "student"){
          window.location.href = "/stud";
        }

        else if (data.user.role === "lecturer") {
          window.location.href = "/lectdash";
        } 
        
        else if (data.user.role === "prl"){      
          window.location.href = "/prls"; 
        }

         else if (data.user.role === "pl"){      
          window.location.href = "/pldash"; 
        }

      } else {
        setMessage(data.message);
      }
    } catch (err) {
      console.error(err);
      setMessage("Server error. Please try again later.");
    }

  };

    return(
      <>
        <div className="lcontainer">
            <div className="login-container">
                <div className="log">
                <img src={limkologo} alt="App Logo" className="logo" />
            </div>
            <div className="lbox"> 
                
                <h2 className="ltitle">Login Details</h2>
                {error && <div className="error-msg">{error}</div>}
                {message && <div className="error-msg">{message}</div>}
                <form onSubmit={submission}> 
                    
            <div className="input-group">       
                <label>Username</label>
                <input type="Username" value={username} onChange={(e) => changeName(e.target.value)} placeholder="Enter username" />
            </div>
          
            <div className="input-group">
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => changePass(e.target.value)} placeholder="Enter password"/>
          </div>

           <div className="input-group">
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => changeEmail(e.target.value)} placeholder="Enter email"/>
          </div>

          <button type="submit" className="login-button">Login</button>
        </form>
         <div className="register-link">
            
            <p>Don't have an Account? <Link to="/register">Register here</Link></p>
        </div>

      </div>
    </div>
    </div>

     <div className="container">
      <Banner image={backer}/>

      </div>
      </>
        
    )
}
export default Login;