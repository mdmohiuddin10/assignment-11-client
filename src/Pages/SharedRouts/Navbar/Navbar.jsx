import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContex } from "../../../firebase/AuthProvider";
import Swal from "sweetalert2";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContex)

    const navlink = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/availablefoods'}>Available Foods</NavLink></li>
        <li><NavLink to={'/addfood'}>Add Food</NavLink></li>
        <li><NavLink to={'/manageFoods'}>Manage My Foods</NavLink></li>
        <li><NavLink to={'/myFoodRequest'}>My Food Reques</NavLink></li>
        {
            user?.email ? <li><NavLink to={'/login'}>login</NavLink></li> :
                <li><NavLink to={'/register'}>Register</NavLink></li>
        }
    </>

    const handleLogOut = () => {
        logOut()
            .then(res => res.json())
            Swal.fire("Good job!", "User logged out Successfully!", "success")
            .then(data => {
                console.log(data);
            })
    }


    return (
        <div className="navbar bg-base-100 md:mb-10 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlink}
                    </ul>
                </div>
                <a className="text-xl">
                    <NavLink to={'/'}>
                        <img className="md:w-[200px] w-[100px] md:h-[120px]" src="https://i.postimg.cc/7YNVY1pr/Food-Thrive-logos-1.jpg" alt="" />
                    </NavLink>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu font-bold text-lg menu-horizontal px-1">
                    {
                        navlink
                    }
                </ul>
            </div>
            {
                user?.email ? <div className="navbar-end">
                    <div className="flex">
                        <img className="w-[50px] rounded-full" src={user.photoURL} alt="" />
                    </div>
                    <a onClick={handleLogOut} className="btn font-bold text-lg">Log Out</a>

                </div> :
                    <div className="navbar-end">
                        <NavLink to={'/login'}>
                            <a className="btn font-bold text-lg">login</a>
                        </NavLink>
                    </div>
            }
        </div>
    );
};

export default Navbar;