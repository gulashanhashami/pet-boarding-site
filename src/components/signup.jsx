
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
       margin-left:30%;
       color: white;
       font-weight: bold;
       background-color: green;
       border-radius: 3px;
       border: 2px solid green;
   }
   #btn:hover{
   background-color: white;
   color: red;
   font-size: 2.2vh;
   }
   h5{
       font-size: 1.8vh;
       margin-left: 10%;
   }
 `;
export const Signup=()=>{
const [sign_data, setSdata]= useState({});
const [status, setStatus]= useState(0);
let navigate=useNavigate();

  const handleChange=(e)=>{
    var key=e.target.name;
    setSdata({
      ...sign_data,
      [key]:e.target.value
    })
  }
  
    // axios({
    //   method: 'POST',
    //   url: 'http://localhost:2345/register',
    //   data:sign_data
    // })
    // .then( (res) => {
    //   console.log(res)
    // })
 
   /*setSdata({
         Name:"",
         email:"",
         password:""
       })*/

    return (
        <div>
           <ResultDiv> 
          
        <form onSubmit={(e)=>{
          e.preventDefault();
          axios.post(`http://localhost:2345/register`, sign_data).then(({data})=>{
            console.log(data)
            if(data.error===false){
              alert("You have registered successfully")
              navigate("/signin")
              
            }
            // console.log(status)
          })
          // if(status===true){
          //   alert("Please enter a valid email and password")
          // }
          // console.log(status)
        }
        }>
        <p>Enter full name</p>
            <input type="text" name="full_name" value={sign_data.full_name} required placeholder="Enter full name" onChange={handleChange} />
            <p>Enter email</p>
            <input type="email" name="email" value={sign_data.email} required  placeholder="Enter email" onChange={handleChange} />
            <p>Enter password</p>
            <input type="password" name="password" value={sign_data.password} required placeholder="Enter a password" onChange={handleChange} />
            <br />
            <br />
            <input id="btn" type="submit" value="Register" />
            <br />
            <h5>Already have a account? <Link style={{"color":"red", "fontSize":"2.3vh"}} to={"/signin"}>Login now</Link></h5>
        </form>
        </ResultDiv>
        </div>
    )
}