import { useContext } from "react";
import { AuthContex } from "../firebase/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";




const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContex)
    const location = useLocation();
    // console.log(location.pathname)




    if (loading) {
        return <div className="justify-center items-center">
           <img src="https://i.postimg.cc/MKtzsc71/24504365-03092022-rorozoa-10.jpg" alt="" />
        </div>
    }


    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;