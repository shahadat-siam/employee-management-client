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
          index:true,
          element: <Statistics/>
        },
        {
          path: 'all-employee',
          element: <AllEmployee/>
        },
        {
          path: 'employee-list',
          element: <EmployeeList/>
        },
        {
          path: 'details',
          element: <Details/>
        },
        {
          path: 'progress',
          element: <Progress/>
        },
        {
          path: 'work-sheet',
          element: <WorkSheet/>
        },
        {
          path: 'payment-history',
          element: <PaymentHis/>
        }
      ]
    }
  ]);
export default router  