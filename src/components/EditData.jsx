import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { editDataLoading, editDataSuccess } from "../redux/actions";
import styled from "styled-components";

  const ResultDiv = styled.div`
  font-family:   sans-serif;
  
  form{
    width: 45%;
    margin: auto;
    /* border: 2px solid red; */
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
  form{
    margin-top: 7%;
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
width: 20%;
height: 4vh;
margin-left: 15%;
color: white;
font-weight: bold;
border-radius: 3px;
background-color: red;
border: 2px solid red;
  }
  #btn:hover{
    background-color: #690303;
  }
  `;
export const EditDatas=()=>{
    const { loading } = useSelector((store) => store.data);
  const dispatch = useDispatch();
  const [pdata, setData] = useState([]);
  const [newData, setNewData] = useState([]);
    let { id } = useParams();
    useEffect(()=>{
    axios.get(`http://localhost:3001/listing/${id}`).then((data)=>{
      // console.log(data)
       setData(data.data);
    })
    },[])

    function handleChange(e) {
        let key = e.target.name;
        let inputData = {};
        if(key==="verified"){
          e.target.value=e.target.checked;
      }
        if (key != "check") {

          inputData = {
            ...newData,
            [key]:e.target.value,
          };
        } else {
          inputData = {
            ...newData,
            [key]:e.target.value,
          };
        }
    
        setNewData(inputData);
      }

      function handleSave(e) {
       e.preventDefault();
        dispatch(editDataLoading());
        axios({
          method: "patch",
          url: `http://localhost:3001/listing/${id}`,
          data: {
            id: pdata.id,
            Name: newData.Name || pdata.Name,
            city: newData.city || pdata.city,
            address: newData.address || pdata.address,
            capacity: newData.capacity || pdata.capacity,
            petType: newData.petType || pdata.petType,
            pottyBreak: newData.pottyBreak || pdata.pottyBreak,
            walk: newData.walk || pdata.walk,
            home_type: newData.home_type || pdata.home_type,
            outdoor_area: newData.outdoor_area || pdata.outdoor_area,
            cost: newData.cost || pdata.cost,
            verified: newData.verified || pdata.verified,
            rating: newData.rating || pdata.rating,


          },
        }).then((res) => {
          dispatch(editDataSuccess());
          
        });
      }
return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <ResultDiv>
      <form onSubmit={handleSave}>
      <p c>Enter Name</p>
        <input type="text" name="Name" defaultValue={pdata.Name} onChange={handleChange} />
        <p>Enter City</p>
        <input type="text" name="city" defaultValue={pdata.city} onChange={handleChange} />
         <p>Enter Address</p>
        <input type="text" name="address" defaultValue={pdata.address} onChange={handleChange} />
        <p>Capacity & type</p>
        <select name="capacity" defaultValue={pdata.capacity} onChange={handleChange} className="option">
            <option value="">Select capacity in kg</option>
            <option value="1_to_5">1 to 5</option>
            <option value="5_to_7">5 to 7</option>
            <option value="8_to_15">8 to 15</option>
            <option value="16_to_20">16 to 20</option>
            <option value="20_to_25">20 to 25</option>
        </select><span className="select">
        <select name="petType" defaultValue={pdata.petType} onChange={handleChange} className="option">
            <option value="">Select pet type</option>
            <option value="dog">Dog</option>
            <option value="cats">Cats</option>
            <option value="rabbits">Rabbits</option>
        </select></span>
        <br />
        <br />
        <select name="pottyBreak" defaultValu={pdata.pottyBreak} onChange={handleChange} className="option">
            <option value="">Number of potty breaks/day</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select><span className="select">
        <select name="walk" defaultValue={pdata.walk} onChange={handleChange} className="option">
            <option value="">Number of walks/day</option>
            <option value="22">22</option>
        </select></span>
        <br />
        <br />
        <select name="home_type" defaultValue={pdata.home_type} onChange={handleChange} className="option">
            <option value="">type of home</option>
            <option value="house">House</option>
           
        </select><span className="select">
        <select name="outdoor_area" defaultValue={pdata.outdoor_area} onChange={handleChange} className="option">
            <option value="">My outdoor area size</option>
            <option value="large">Large</option>
        </select></span>
        <p>Cost per day</p>
        <input type="number" name="cost" defaultValue={pdata.cost} onChange={handleChange} />
        <br />
      <input id="check" type="checkbox" name="verified"  onChange={handleChange} /><span>Verified</span><span className="select">Select Rating
        <select name="rating" defaultValue={pdata.rating} onChange={handleChange} className="option">
            <option value="0">Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select></span>
        <br />
        <br />
         <input id="btn" type="submit" value="Save" />
      
      <input type="checkbox" id="check" onChange={handleChange} name="check" />
      <label htmlFor="check">Completed</label>
      </form>
      </ResultDiv>
    </div>
  );
};