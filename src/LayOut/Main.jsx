import { Outlet } from "react-router-dom";
import Navbar from "../Shered/Navbar";
import Footer from "../Shered/Footer";

 
 const Main = () => {
  return (
    < >
      <Navbar/>
      <Outlet/>
      <Footer/>
    </ >
  );
 };
 
 export default Main;