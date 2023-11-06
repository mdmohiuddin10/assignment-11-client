import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContex } from "../../firebase/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {

    const { signIn, googleLogin } = useContext(AuthContex)

    const location = useLocation();
    const navigate = useNavigate()
    console.log(location);

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password);



        // sign in
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                // setSuccess('user logged succsee')
                Swal.fire("Good job!", "User Logged Successfully!", "success");

                // navigate after login
                navigate(location?.state ? location.state : '/');


            })
            .catch(error => {
                console.log(error);
                Swal.fire("Error!", "Something Went Wrong!", "error");

            })


    }


    const handleGoogle = () => {
        googleLogin()
            .then((result) => {
                console.log(result.user)
                Swal.fire("Good job!", "User logged Successfully!", "success");
                navigate(location?.state ? location.state : '/');
            })
            .catch((error) => {
                alert(error.message);
            })
    }





    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content gap-5 flex-col lg:flex-row">
            <div className="w-1/2">
                <img src="https://i.postimg.cc/3RkjDMQB/11668754-20945760.jpg" alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleLogin} className="card-body">
                    <h2 className='text-3xl font-bold text-center'>Login</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className='text-center mb-4'>New to website? <Link className='text-orange-400 font-bold' to={'/register'}>Sign Up</Link></p>
                <h2 className="text-center font-semibold text-2xl mt-5 mb-5">Continue With Google</h2>
            <div className="border w-[50px] mx-auto mb-10">
                <button onClick={handleGoogle}><FaGoogle className="text-5xl px-3 py-3 w-full justify-center"></FaGoogle></button>
            </div>
            </div>
        </div>
    </div>

    );
};

export default Login;