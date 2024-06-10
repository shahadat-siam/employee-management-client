import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Component/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Dashboard from "../LayOut/Dashboard";
import Statistics from "../Dashboard/Statistics";
import AllEmployee from "../Dashboard/Admin/AllEmployee";
import EmployeeList from "../Dashboard/HR/EmployeeList";
import Details from "../Dashboard/HR/Details";
import Progress from "../Dashboard/HR/Progress";
import WorkSheet from "../Dashboard/Employee/WorkSheet";
import PaymentHis from "../Dashboard/Employee/PaymentHis";
import ContactUs from "../Pages/ContactUs/ContactUs";
import PrivateRoutes from "./PrivateRoutes";

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
           path: '/contact',
           element: <ContactUs/> 
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
      element:  <PrivateRoutes><Dashboard/></PrivateRoutes>,
      children: [
        {
          index:true,
          element: <Statistics/>
        },
        {
          path: 'all-employee',
          element:  <PrivateRoutes><AllEmployee/></PrivateRoutes>
        },
        {
          path: 'employee-list',
          element: <PrivateRoutes><EmployeeList/></PrivateRoutes>
        },
        {
          path: 'details/:id',
          element:  <PrivateRoutes><Details/></PrivateRoutes>
        },
        {
          path: 'progress',
          element:  <PrivateRoutes><Progress/></PrivateRoutes>
        },
        {
          path: 'work-sheet',
          element: <PrivateRoutes><WorkSheet/></PrivateRoutes>
        },
        {
          path: 'payment-history',
          element: <PrivateRoutes><PaymentHis/></PrivateRoutes>
        }
      ]
    }
  ]);
export default router  