import axios from "axios";
 import { useState } from "react";
 import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
 const ResultDiv = styled.div`
 font-family: sans-serif;
 form{
   width: 30%;
   margin: auto;
   /* border: 2px solid green; */
 }
 input{
       width: 90%;     
    height: 4.6vh;
 }
 p{
       font-weight: bold;
       margin-right: 18%;
 }
   .edit{
    margin-right: 20%;
  }
  a{
    margin-right: 13%;
    text-decoration: none;
    color: white;
  }
  a:hover{
    color: red;
  }
  .edit:hover{
  color: red;
  }
   #btn{
       width: 30%;
       height: 6vh;
       color: white;
       margin-left: 30%;
       font-weight: bold;
       border-radius: 3px;
       background-color: green;
       /* border: 2px solid green; */
   }
   #btn:hover{
   background-color: white;
   color: red;
   font-size: 2.2vh;
   }
 `;
export const Signin=()=>{
  const [sign_data, setSdata]= useState({});
  const [status, setStatus]= useState(true);
let navigate=useNavigate();

  const handleChange=(e)=>{
    var key=e.target.name;
    setSdata({
      ...sign_data,
      [key]:e.target.value
    })
  }
    return (
        <div>
           <ResultDiv> 
        <form onSubmit={(e)=>{
           e.preventDefault();
           axios.post(`http://localhost:2345/login`, sign_data).then(({data})=>{
             console.log(data.error)
             if(data.error===false){
               alert("Login successfully")
              navigate("/")
            }else{
              alert("Please enter same email and password")
            }
           })
        }}>
            <p>Enter email</p>
            <input type="email" name="email" value={sign_data.email} required  placeholder="Enter email" onChange={handleChange} />
            <p>Enter password</p>
            <input type="password" name="password" value={sign_data.password} required placeholder="Enter a password" onChange={handleChange} />
            <br />
            <br />
            <input id="btn" type="submit" value="Login" />
        </form>
        </ResultDiv>
        </div>
    )
}