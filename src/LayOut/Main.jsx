import { Outlet } from "react-router-dom";
import Navbar from "../Shered/Navbar";

 
 const Main = () => {
  return (
    < >
      <Navbar/>
      <Outlet/>
    </ >
  );
 };
 
 export default Main;