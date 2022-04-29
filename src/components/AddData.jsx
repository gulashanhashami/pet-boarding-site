
 import axios from "axios";
 import { useState } from "react";
 import styled from "styled-components";
import { Link } from "react-router-dom";
const Stylediv=styled.div`
font-family:sans-serif;
  .title{
      margin: auto;
      width: 45%;
      color: red;
       /* border: 1px solid red; */
  }
   form{
       width: 45%;
       height: auto;
       /* border: 1px solid red; */
       margin: auto;
   } 
   input{
       width: 60%;
       height: 3.5vh;
   }
   #check{
       width: 2vh;
      
   }
   .select{
       margin-left: 10%;
   }
   .option{
       width: 25%;
       height: 3.5vh;
   }
   #btn{
       width: 30%;
       height: 4.5vh;
       font-weight: bold;
       background-color: green;
       color: white;
       border: 2px solid green;
       border-radius: 3px;
       margin-left: 14%;
   }
   #btn:hover{
       background-color: white;
       font-weight: bolder;
       color: red;
   }
`;
export const AddData=()=>{
const [pdata, setData] =useState({})

const handleChange=(e)=>{
    let key=e.target.name;
    if(key==="verified"){
        e.target.value=e.target.checked;
    }
        setData(
            {
                ...pdata,
                [key]: e.target.value,
            }
        )
}

    return (
       
            <Stylediv>
        <div className="title">
        <h1>Add the data</h1>
        </div>
        <form onSubmit={(e)=>{
            e.preventDefault();
            axios.post(`http://localhost:3001/petData`, pdata).then((res)=>{
               setData({
                   Name:"",
                   city:"",
                   address:"",
                   capacity:"",
                    petType:"",
                    pottyBreak:"",
                    walk:"",
                    home_type:"",
                    outdoor_area:"",
                    cost:"",
                    verified:"",
                    rating:""

               })
            })
        }}>
        <p c>Enter Name</p>
        <input type="text" name="Name" value={pdata.Name} onChange={handleChange} />
        <p>Enter City</p>
        <input type="text" name="city" value={pdata.city} onChange={handleChange} />
         <p>Enter Address</p>
        <input type="text" name="address" value={pdata.address} onChange={handleChange} />
        <p>Capacity & type</p>
        <select name="capacity" value={pdata.capacity} onChange={handleChange} className="option">
            <option value="">Select capacity in kg</option>
            <option value="1_to_5">1 to 5</option>
            <option value="5_to_7">5 to 7</option>
            <option value="8_to_15">8 to 15</option>
            <option value="16_to_20">16 to 20</option>
            <option value="20_to_25">20 to 25</option>
        </select><span className="select">
        <select name="petType" value={pdata.petType} onChange={handleChange} className="option">
            <option value="">Select pet type</option>
            <option value="dog">Dog</option>
            <option value="cats">Cats</option>
            <option value="rabbits">Rabbits</option>
        </select></span>
        <br />
        <br />
        <select name="pottyBreak" value={pdata.pottyBreak} onChange={handleChange} className="option">
            <option value="">Number of potty breaks/day</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select><span className="select">
        <select name="walk" value={pdata.walk} onChange={handleChange} className="option">
            <option value="">Number of walks/day</option>
            <option value="22">22</option>
        </select></span>
        <br />
        <br />
        <select name="home_type" value={pdata.home_type} onChange={handleChange} className="option">
            <option value="">type of home</option>
            <option value="house">House</option>
           
        </select><span className="select">
        <select name="outdoor_area" value={pdata.outdoor_area} onChange={handleChange} className="option">
            <option value="">My outdoor area size</option>
            <option value="large">Large</option>
        </select></span>
        <p>Cost per day</p>
        <input type="number" name="cost" value={pdata.cost} onChange={handleChange} />
        <br />
      <input id="check" type="checkbox" name="verified" value={pdata.verified}  onChange={handleChange} /><span>Verified</span><span className="select">Select Rating
        <select name="rating" value={pdata.rating} onChange={handleChange} className="option">
            <option value="0">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select></span>
        <br />
        <br />
       <input id="btn" type="submit"  value="Submit" />
        </form>
</Stylediv>
     
    )
}