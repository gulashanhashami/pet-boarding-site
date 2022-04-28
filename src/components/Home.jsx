
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";
import {
    getDataLoading,
    getDataSuccess,
  } from "../redux/actions";
  import axios from "axios";

  import styled from "styled-components";

  const ResultDiv = styled.div`
  font-family: sans-serif;

.filter{
  width: 20%;
  font-weight: bold;
  font-size: 2vh;
  height: 3.5vh;
  margin-right: 10%;
  border-radius: 3px;
}
.sort{
  width: 20%;
  font-weight: bold;
  font-size: 2vh;
  height: 3.5vh;
  border-radius: 3px;
}
  #searchbar{
    width: 100%;
    height: 5vh;
    padding-left:7%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-weight: bold;
    font-size: 3vh;
    color: white;
    margin-top: 2vh;
    align-items: center;
    background-color: #f6eeee;
    /* border: 1px solid red; */
  }
  
  table{
      margin: auto;
      margin-top: 5vh;
  }
  th, td{
    padding: 2.2vh;
    border-bottom: 1px solid grey;
}
th{
    font-weight: bold;
    font-size: 3vh;
    /* border: 2px solid grey; */
}
td{
  font-size: 2.5vh;
}
tr:hover{
  background-color: teal;
  font-weight: bold;
  color: white;
}

  a{
    text-decoration: none;
    color:white;
  }
  a:hover{
    color: red;
  }
  
h4:hover{
  color:red;
}
.rt{
  margin-left: 100px;
}
.btndiv{
  width: 15%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin:auto ;
 
}
.pagebtn{
  width: 10vh;
  height: 6vh;
  margin: auto;
  color: white;
  font-size: 1.8vh;
  font-weight: bold;
  background-color: blue;
  border: 2px solid blue;
}
.pagebtn:hover{
  background-color: white;
  color: red;
}
.sign{
  /* float: right; */
  margin-right: 15%;
}
#btn1{
    color:white;
    padding: 1vh;
    background-color: blue;
    border:2px solid blue;
   
  }
  #btn2{
    color:white;
    padding: 1vh;
    background-color: blue;
    border:2px solid blue;
   
  }
#btn3{
    color:white;
    padding: 1vh;
    background-color: red;
    border:2px solid red;
   
  }
  #btn3:hover{
    background-color: #310202;
  }
  #sbarbox{
    width: 40%;
    display: flex;
    flex-direction: row;
    /* border:2px solid red; */
  }
  #sbtn{
    color: white;
    font-weight: bold;
    background-color: black;
  }
  #sbtn:hover{
    background-color: #09fd09;
  }
`;

  export const Home = () => {
    const [page, setPage]= useState(1);
    const { loading, data, error } = useSelector((store) => store.data); 
    const dispatch = useDispatch();
    useEffect(() => {
      getDatas();
    }, [page]);

    const getDatas = () => {
      
        dispatch(getDataLoading());
        axios.get(`http://localhost:3001/listing?_page=${page}&_limit=7`).then(({ data }) => {
          dispatch(getDataSuccess(data));
        });
      };

      let handleRemove = (e) => {
        axios.delete(`http://localhost:3001/listing/${e.id}`)
            .then((res) => {
              getDatas()
            
            })
            .catch((err) => {
               console.log(err);
            })
    }
    function result(e){
      if(e.target.value==="low"){
        var arr1=data.sort((a,b)=>a.cost-b.cost)
        dispatch(getDataSuccess(arr1));
        //  console.log(arr1)
      }else{
        var arr2=data.sort((a,b)=>b.cost-a.cost)
        dispatch(getDataSuccess(arr2));
        // console.log(arr2)
      }
    }
    function resultRate(e){
      if(e.target.value==="low"){
        var arr1=data.sort((a,b)=>a.rating-b.rating)
        dispatch(getDataSuccess(arr1));
        //  console.log(arr1)
      }else{
        var arr2=data.sort((a,b)=>b.rating-a.rating)
        dispatch(getDataSuccess(arr2));
        // console.log(arr2)
      }
    }

    function result1(e){
     
      if(e.target.value==="varanasi"){
        var arr3=data.filter(e=>e.city==="Varanasi");
       dispatch(getDataSuccess(arr3));
        //  console.log(arr3)
      }
      else if(e.target.value==="ghaziabad"){
        var arr4=data.filter(e=>e.city==="Ghaziabad");
        dispatch(getDataSuccess(arr4));
         //  console.log(arr3)
       }
       else if(e.target.value==="delhi"){
         var arr5=data.filter(e=>e.city==="Delhi");
        dispatch(getDataSuccess(arr5));
         //  console.log(arr3)
       }
       else if(e.target.value==="bangalore"){
         var arr6=data.filter(e=>e.city==="Bangalore");
        dispatch(getDataSuccess(arr6));
         //  console.log(arr3)
       }
    }
    function result2(e){
     
      if(e.target.value==="1"){
        var arr7=data.filter(e=>e.verified==="true");
       dispatch(getDataSuccess(arr7));
        //  console.log(arr3)
      }
      else if(e.target.value==="0"){
        var arr8=data.filter(e=>e.verified==="false");
        dispatch(getDataSuccess(arr8));
         //  console.log(arr3)
       }
      }

     
      return (
        <div>
         <ResultDiv>
         
         
          <div id="searchbar">
           
            <select onChange={
             result

            } name="" className="sort">
              <option value="">Sort by cost per day</option>
              <option value="low">Low to high</option>
              <option value="high">High to low</option>
            </select>
            <select onChange={
             resultRate

            } name="" className="sort">
              <option value="">Sort by rating</option>
              <option value="low">Low to high</option>
              <option value="high">High to low</option>
            </select>


            <select onChange={result1} name="" className="sort">
              <option value="">Filter by city</option>
              <option value="varanasi">Varanasi</option>
              <option value="ghaziabad">Ghaziabad</option>
              <option value="delhi">Delhi</option>
              <option value="bangalore">Bangalore</option>
            </select>
            <select onChange={result2} name="" className="filter">
              <option value="">Filter by verified</option>
              <option value="1">True</option>
              <option value="0">False</option>
            </select>
          </div> 
         
          <div className="box1">
            
          <table>
            <thead>
                <th>S.no</th>
                <th>Name</th>
                <th>City</th>
                <th>Address</th>
                <th>Capacity</th>
                <th>Cost per day</th>
                <th>Verified</th>
                <th>Rating</th>
                <th>Details</th>
                <th>Edit</th>
                <th>Delete</th>
            </thead>
            <tbody>
                {data.map((item)=>{
                    return (
                      
                        <tr key={item.id}>
                         
                         <td>{item.id}</td>
                         <td>{item.Name}</td>
                         <td>{item.city}</td>
                         <td>{item.address}</td>
                         <td>{item.capacity}</td>
                         <td>{item.cost}</td>
                         <td>{item.verified}</td>
                         <td>{item.rating}</td>
                         <td>
                            <Link to={`/listing/${item.id}/detail`}>
                              <button id="btn1">Details</button>
                             </Link>
                             </td>
                         
                             <td>
                            <Link to={`/listing/${item.id}/edit`}>
                              <button id="btn2">Edit</button>
                             </Link>
                             </td>
                             <td>
                               <button id="btn3" onClick={()=>{
                                 handleRemove(item)
                               }}>
                                 Delete
                               </button>
                             </td>
                        
                        </tr>
                       
                    )
                })}
              
            </tbody>
         </table>  
          </div>
          <div className="btndiv">
          <button className="pagebtn"
        onClick={() => {
       setPage(page-1);
        }}
      >
        Prev
      </button>

      <button className="pagebtn"
        onClick={() => {
      setPage(page+1);
        }}
      >
        Next
      </button>
      </div>
          </ResultDiv>
        </div>
      );
    };