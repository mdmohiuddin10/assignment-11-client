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
import ManageSingleFood from "../Pages/ManageFoods/ManageSingleFood";
import Updatedata from "../Pages/UpdateData/Updatedata";
import Contact from "../Pages/Contact/Contact";


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
        loader: () => fetch('https://assignment-11-server-omega-snowy.vercel.app/allfoods')
      },
      {
        path: 'details/:id',
        element: <Details></Details>,
        loader: ({ params }) => fetch(`https://assignment-11-server-omega-snowy.vercel.app/allfoods/${params.id}`)
      },
    
      {
        path: '/requestFood/:id',
        element: <PrivateRoute><ManageSingleFood></ManageSingleFood></PrivateRoute>,
        loader: ()=>fetch('https://assignment-11-server-omega-snowy.vercel.app/requestFood')
      },
      {
        path: 'myFoodRequest',
        element: <PrivateRoute><MyFoodRequest></MyFoodRequest></PrivateRoute>
      },
      {
        path: 'manageFoods',
        element: <PrivateRoute><ManageFoods></ManageFoods></PrivateRoute>,
        loader: () => fetch('https://assignment-11-server-omega-snowy.vercel.app/allfoods')
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'updatedata/:id',
        element: <Updatedata></Updatedata>,
        loader: ({ params }) => fetch(`https://assignment-11-server-omega-snowy.vercel.app/allfoods/${params.id}`)
      },
      {
        path: 'copyright',
        element: <Copyright></Copyright>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
    ]
  },
]);

export default router