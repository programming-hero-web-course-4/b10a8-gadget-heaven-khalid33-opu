import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import Home from "../Pages/Home";
import GadgetDetails from "../Components/GadgetDetails";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import Categoryes from "../Components/Categoryes";
import HomeTow from "../Pages/HomeTow";
import Gadget from "../Components/Gadget";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        
       { 
        path:'/',
        element:<Home></Home>,
        children:[
          {
            path:'/category/:category',
            element:<HomeTow></HomeTow>,
            loader:() =>fetch('../Gadgets.json'),
          }
        ]
        
       },
       {
        path: "/gadget/:productId", 
        element: <GadgetDetails/>,
        loader:() =>fetch('../Gadgets.json')
       },
       {
        path:'/statistics',
        element:<Statistics></Statistics>,
        loader:() =>fetch('../Gadgets.json')
       },
       {
        path:'/dashboard',
        element:<Dashboard></Dashboard>
       }, 
       {
        path:'/',
        element:<Categoryes></Categoryes>
       },
      
     
      ]
    },
  ]);

  export default router