import "./Login.css"
import { useState } from "react";
import { useHistory } from "react-router-dom";

let serverAdd = "http://127.0.0.1:8080";


let Login = () => {

    const navigate = useHistory();
    const [credentials, setCredentials] = useState({email: "", password: ""}) 
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(serverAdd + "/signin", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json()
        console.log(json);
        if (json.status && json.status.user.uid){
            // Save the auth token and redirect
            localStorage.setItem('uid', json.status.user.uid); 
            localStorage.setItem('user', JSON.stringify(json.status.user)); 
         console.log(localStorage.getItem("uid"));
         navigate.push("/dashboard");
         

        }
        else{
            document.getElementById("e").style.display = "block";
            console.log("Dude!","Invalid credentials");
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }




    return       <div className="screen-1">
    <h2 style={{color:"black",marginBottom:"28px",fontWeight:"700",fontSize:"32px"}}>Login</h2>
    <br></br>
   
    <div className="email">
    
      <label htmlFor="email">Email Address</label>
      <div className="sec-2">
        <ion-icon name="mail-outline" />
        <input type="email"  value={credentials.email} onChange={onChange} id="email" name="email"  placeholder="Username@gmail.com" />
      </div>
    </div>
    <div className="password">
      <label htmlFor="password">Password</label>
      <div className="sec-2">
        <ion-icon name="lock-closed-outline" />
        <input className="pas" type="password"  value={credentials.password} onChange={onChange} id="password" name="password"  placeholder="············" />
        <ion-icon className="show-hide" name="eye-outline" />
      </div>
    </div>
    <span id="e" style={{color:"red",fontSize:"12px",display:"none"}}>Wrong Credentials!</span>
    <button onClick={handleSubmit} className="login">Login </button>
    <div className="footer"><span>Forgot Password?</span></div>
  </div>
}

export default Login;