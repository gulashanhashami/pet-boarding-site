import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";
import {detailsDataLoading, detailsDataSuccess} from "../redux/actions";
import styled from "styled-components";
import { Link } from "react-router-dom";
const ResultDiv = styled.div`
font-family:   Arial, sans-serif;

.box{
    margin:auto;
    margin-top:50px;
    width:50%;
    height:auto;
    background-color: #284242;
     /* border:1px solid red; */
}
.text{
    width: 100%;
    margin-left: 10%;
      height: auto; 
      padding-bottom: 2vh;
      text-align: left;
      font-weight: bold;
      color: white;
      /* border:1px solid red; */
}
.head{
  color: black;
  margin-left: 10%;
}

a{
  text-decoration: none;
  color: white;
}
a:hover{
  color: red;
}
`;
export const DetailsData=()=>{
  
    const { loading, data, error } = useSelector((store) => store.data);  
    const dispatch = useDispatch();
    let { id } = useParams();
    useEffect(()=>{
      getdata_pertcul();
    },[])

    const getdata_pertcul=()=>{
      dispatch(detailsDataLoading());
      axios.get(`http://localhost:3001/petdata/${id}`).then(({data})=>{
          dispatch(detailsDataSuccess(data));
        
      })
    }
   
// console.log(data)

return (
    <div>
      
        <ResultDiv> 
    
            <div className="box">
              <h1 className="head">Detail page</h1>
           <div className="text">
           <p>Name : {data.Name}</p>
            <p>City name : {data.city}</p>
            <p>Address : {data.address}</p>
            <p>Accepted Pet type : {data.petType}</p>
            <p>Accepted Pet size : {data.capacity}</p>
            <p>The number of potty breaks provided per day : {data.pottyBreak}</p>
            <p>The number of walks provided per day : {data.walk}</p>
            <p>The type of home I stay in : {data.home_type}</p>
            <p>My outdoor area size : {data.outdoor_area}</p>
            <p>Cost of pet per day : {data.cost}</p>
            <p>Verified or not : {data.outdoor_area}</p>
            <p>Rating of pet : {data.outdoor_area}</p>
           </div>
           
          </div>
      </ResultDiv>
    </div>
)
};
