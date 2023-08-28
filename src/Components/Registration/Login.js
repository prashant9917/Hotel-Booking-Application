
import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"


function Login() {

    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:4500/",{
               email,password, 
            })
            .then(res=>{
                if(res.data=="exist"){
                    history("/home",{state:{id:email}})
                }
                else if(res.data=="notexist"){
                    alert("User have not sign up")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <div className="signup">

        <h1 className="form-title">Log In</h1>
        <div className="form-group">
            <form action="POST">

                <i className="zmdi zmdi-email"></i>
                <input type="email"
                    name="email" id="email"
                    onChange={(e) => { setEmail(e.target.value) }}
                    placeholder="Enter Your Email" /> <br />

                <i className="zmdi zmdi-lock"></i>
                <input type="password"
                    name="password" id="password"
                    onChange={(e) => { setPassword(e.target.value) }}
                    placeholder="Enter Your Password" /><br />
             
                    <input type="submit" onClick={submit} className="form-submit" /> 
            </form><br />
            <h3>OR</h3><br />
            
           <p className="sign-end">You are Already Login  <Link to="/signup">SignUp Here</Link></p>
        </div>
    </div>
    )
}

export default Login