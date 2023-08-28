
import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"


function Signup() {
    const history = useNavigate();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')

    async function submit(e) {
        e.preventDefault();
        console.log('submit')
        try {

            await axios.post("http://localhost:4500/signup", {
                name, email, phone, password, cpassword 
            })
                .then(res => {
                    if (res.data == "exist") {
                        alert("User already exists")
                    }
                    else if (res.data == "notexist") {
                        history("/home", { state: { id: name } })
                    }
                })
                .catch(e => {
                    alert("wrong details")
                    console.log(e);
                })

        }
        catch (e) {
            console.log(e);

        }

    }


    return (
        <div className="signup">

            <h1 className="form-title">Sign up</h1>
            <div className="form-group">
                <form action="POST">
                    <i className="zmdi zmdi-account"></i>
                    <input type="text"
                        name="name" id="name"
                        onChange={(e) => { setName(e.target.value) }}
                        placeholder="Enter Your Name" /><br />

                    <i className="zmdi zmdi-email"></i>
                    <input type="email"
                        name="email" id="email"
                        onChange={(e) => { setEmail(e.target.value) }}
                        placeholder="Enter Your Email" /> <br />

                    <i className="zmdi zmdi-phone-ring"></i>
                    <input type="number"
                        name="number" id="number"
                        onChange={(e) => { setPhone(e.target.value) }}
                        placeholder="Enter Your Number" /><br />

                    <i className="zmdi zmdi-lock"></i>
                    <input type="password"
                        name="password" id="password"
                        onChange={(e) => { setPassword(e.target.value) }}
                        placeholder="Enter Your Password" /><br />

                    <i className="zmdi zmdi-lock"></i>
                    <input type="password"
                        name="cpassword" id="cpassword"
                        onChange={(e) => { setCpassword(e.target.value) }}
                        placeholder="Enter Confirm Password" /><br /><br />
                        <input type="submit" onClick={submit} className="form-submit" /> 
                </form><br />
                <h3>OR</h3><br />
                
               <p className="sign-end">You are Already Signup  <Link to="/login">Login Here</Link></p>
            </div>
        </div>
    )
}

export default Signup