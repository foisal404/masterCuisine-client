import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home/Home";
import ChefLayout from "../../layout/ChefLayout";
import Chef from "../../pages/Chef/Chef/Chef";
import handlerRecipies from "../../Hooks/Hooks";
import Errorpage from "../../components/ErrorPage/Errorpage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Errorpage></Errorpage>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader:()=> fetch('http://localhost:5000/chefs')
        }
      ]
    },
    {
        path:'/chef',
        element:<ChefLayout></ChefLayout>,
        errorElement:<Errorpage>Chef Id not found</Errorpage>,
        children:[
            {
                path:'/chef/:id',
                element:<Chef></Chef>,
                loader:({params})=> handlerRecipies(params.id)
            }
        ]
    }
  ]);