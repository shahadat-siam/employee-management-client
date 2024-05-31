import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Component/Home/Home";

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
  ]);
export default router  