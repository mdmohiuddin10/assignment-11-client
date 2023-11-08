import { NavLink } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <div className="card-actions justify-center mt-10">
                <NavLink to={'/'}>
                    <button className="btn btn-accent">Go Back</button>
                </NavLink>
            </div>
            <img className="w-full max-h-screen" src="https://i.postimg.cc/rstV0zCc/7887410-3793096.jpg" alt="" />
        </div>
    );
};

export default ErrorPage;