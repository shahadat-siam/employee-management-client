import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Component/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Dashboard from "../LayOut/Dashboard";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            index:true,
            element: <Home/>
        },
        {
            
        }
      ]
    },
    {
      path: '/register',
      element: <SignUp/>
    },
    {
      path:'/login',
      element: <Login/>
    },
    {
      path: '/dashboard',
      element: <Dashboard/>,
      children: [
        {
          
        }
      ]
    }
  ]);
export default router  