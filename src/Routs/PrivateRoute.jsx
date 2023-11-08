import { useContext } from "react";
import { AuthContex } from "../firebase/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";




const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContex)
    const location = useLocation();
    console.log(location.pathname)
        
        


    if(loading){
        return <span className="loading loading-spinner text-error"></span>
    }


    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;