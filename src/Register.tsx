import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Register() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [matchPwd, setMatchPwd] = useState("");

    const history = useNavigate();
    const [data, setData] = useState([]);

    const register = () => {
        let inputValue = { username, password, matchPwd }
        console.log(inputValue);

        if (username === "") {
            alert("name field is required");
        }
        else if (password === "") {
            alert("password field is required");
        } else if (password.length < 5) {
            alert("password length greater 5");
        }
        else if (matchPwd === "") {
            alert("confpassword field is required");
        } else if (matchPwd.length < 5) {
            alert("confpassword length greater 5");
        }
        else {
            console.log("Register Completed");
            localStorage.setItem("userdetail", JSON.stringify([...data, inputValue]));
            history("/");

        }


    }

return (

        <div>
            <div className="container">
                <header><p className="para">Todos</p></header>
                <div className="container-form">


                    <div>
                        <h1>Register for free</h1>

                        <div>
                            <input type="text" id="username" value={username} onChange={(e) => setUserName(e.target.value)} placeholder="Username" className="uname" />
                        </div>
                        <br />
                        <div>
                            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="pwd" />
                        </div>
                        <br />
                        <div>
                            <input type="password" id="confirm_pwd" value={matchPwd} onChange={(e) => setMatchPwd(e.target.value)} placeholder="Confirm password" className="cpwd" />
                        </div>
                        <div>
                            <button onClick={register} className="addbtn">Register</button>
                        </div>
                        <div>
                            <p className="lnk1"><NavLink to={"/"}>Have an account? Login now</NavLink></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Register;






