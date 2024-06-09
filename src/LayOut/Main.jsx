import { Outlet } from "react-router-dom";
import Navbar from "../Shered/Navbar";
import Footer from "../Shered/Footer";

 
 const Main = () => {
  return (
    < >
      <Navbar/>
      <div className='min-h-[calc(100vh-138px)]'>
        <Outlet />
      </div>
      <Footer/>
    </ >
  );
 };
 
 export default Main;