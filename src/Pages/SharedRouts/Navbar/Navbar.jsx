import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContex } from "../../../firebase/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContex)

    const navlink = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/availablefoods'}>Available Foods</NavLink></li>
        <li><NavLink to={'/addfood'}>Add Food</NavLink></li>
        <li><NavLink to={''}>Manage My Foods</NavLink></li>
        <li><NavLink to={'/myFoodRequest'}>My Food Reques</NavLink></li>
        {
            user?.email ? <li><NavLink to={'/login'}>login</NavLink></li> :
                <li><NavLink to={'/register'}>Register</NavLink></li>
        }
    </>

    const handleLogOut = () => {
        logOut()
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlink}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navlink
                    }
                </ul>
            </div>
            {
                user?.email ? <div className="navbar-end">
                    <div className="flex">
                        <h2>{user.displayName}</h2>
                        <img className="w-[30px] rounded-full" src={user.photoURL} alt="" />
                    </div>
                    <a onClick={handleLogOut} className="btn">Log Out</a>

                </div> :
                    <div className="navbar-end">
                        <NavLink to={'/login'}>
                            <a className="btn">login</a>
                        </NavLink>
                    </div>
            }
        </div>
    );
};

export default Navbar;