
import React, { useState } from "react";
import { NavLink } from "react-router-dom"; 
import { useNavigate } from "react-router-dom";


function Login() {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const history=useNavigate();
    const getuserArr=localStorage.getItem("userdetail");

    const signIn=()=>{
        let inpValue={username,password}
       console.log(inpValue);
       if(username===""){
           alert("name field is required");
       }
       else if(password===""){
           alert("password field is required");
       } else if(password.length<5){
           alert("password length greater 5");
       }
       else{
           if(getuserArr && getuserArr.length){
               const userdata=JSON.parse(getuserArr);
               const userlogin=userdata.filter(()=>{
                   return username===username && password===password
               });
   
               if(userlogin.length===0)
               {
                   alert("invalid details");
   
               }
                else{
                  
                   console.log("user login successfully");
                   history("/Todo");
               }
            }
        }
    }    

        return (


            <div>
                <div className="container">
                    <header><p className="para">Todos</p></header>
                    <div className="container-form">


                        <section>
                            <h1>Sign in</h1>

                            <div>
                                <input type="email" id="username" value={username} onChange={(e) => setUserName(e.target.value)} placeholder="Username" className="uname" />
                            </div>
                            <br />
                            <div>
                            

                                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="pwd" />
                                <button onClick={signIn} className="btn">Sign in</button>
                                
                            </div>
                            <div>
                                <p className="lnk"><NavLink to={"/register"}>New here? Register now</NavLink></p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            
        )
        
    }
    export default Login;

