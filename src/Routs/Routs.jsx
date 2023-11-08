import { createBrowserRouter } from "react-router-dom";
import Roots from "./Roots";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddFood from "../Pages/AddFood/AddFood";
import AvailableFoods from "../Pages/AvailableFoods/AvailableFoods";
import Details from "../Pages/Details/Details";
import MyFoodRequest from "../Pages/MyFoodRequest/MyFoodRequest";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ManageFoods from "../Pages/ManageFoods/ManageFoods";
import About from "../Pages/Home/AboutSection/About";
import Copyright from "../Pages/SharedRouts/Footer/Copyright/Copyright";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/addfood',
            element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
        },
        {
            path: '/availablefoods',
            element: <AvailableFoods></AvailableFoods>,
            loader: ()=>fetch('http://localhost:5000/allfoods')
        },
        {
          path: 'details/:id',
          element: <Details></Details>,
          loader: ({params})=> fetch(`http://localhost:5000/allfoods/${params.id}`)
      },
        {
          path: 'myFoodRequest',
          element: <PrivateRoute><MyFoodRequest></MyFoodRequest></PrivateRoute>
      },
        {
          path: 'manageFoods',
          element: <PrivateRoute><ManageFoods></ManageFoods></PrivateRoute>,
          loader: ()=>fetch('http://localhost:5000/allfoods')
      },
        {
          path: 'about',
          element: <About></About>
      },
        {
          path: 'copyright',
          element: <Copyright></Copyright>
      },
      ]
    },
  ]);

  export default router