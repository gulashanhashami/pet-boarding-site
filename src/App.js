// import './App.css';
import {Home} from "./components/Home";
import {Routes, Route} from "react-router-dom";
import { EditDatas } from './components/EditData';
import { DetailsData } from './components/DetailsData';
import { AddData } from './components/AddData';
import { Signup } from './components/signup';
import { Signin } from './components/signin';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
     <Routes>
       <Route path={"/"} element={<Home />}></Route>
       <Route path={"/addData"} element={<AddData />}></Route>
       <Route path={"/signup"} element={<Signup />}></Route>
       <Route path={"/signin"} element={<Signin />}></Route>
       <Route path={"/petdata/:id/edit"} element={<EditDatas />}></Route>
       <Route path={"/petdata/:id/detail"} element={<DetailsData />}></Route>
     </Routes>
    </div>
  );
}
export default App;