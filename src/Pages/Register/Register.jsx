import { Link } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContex } from "../../firebase/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";



const Register = () => {

    const { createUser, googleLogin } = useContext(AuthContex)



    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);



        if (password.length < 6) {
            alert("password must be 6 charecters")
            return
        }
        else if (!/[A-Z!@#$%^&*()_+{}|:"<>?~`\-=[\]\\;',./]/.test(password)) {
            Swal.fire("Error!", "Your password should have at least one uppercase charecter!", "error");
            return
        }


        // create user
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire("Good job!", "User Created Successfully!", "success");


                // update Profile
                updateProfile(result.user, { displayName: name }, { photoURL: photo })
                    .then(() => {
                        console.log('Profile Updated');
                    })
                    .catch()

            })
            .catch(error => {
                console.log(error.message);
                Swal.fire("Error!", "Something went wrong!", "error");
            })
    }

    const handleGoogle = () => {
        googleLogin()
            .then((result) => {
                console.log(result.user)
                Swal.fire("Good job!", "User Created Successfully!", "success");
            })
            .catch((error) => {
                console.log(error);
                Swal.fire("Error!", "Something went wrong!", "error");
            })
    }







    return (
        <div className="hero bg-base-200 mt-10">
            <div className="hero-content gap-5 flex-col lg:flex-row">
                <div className="lg:w-1/2 w-full">
                    <img className="px-5 md:px-10 lg:px-0" src="https://i.postimg.cc/3RkjDMQB/11668754-20945760.jpg" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <h2 className='text-3xl font-bold text-center'>Sign Up</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Conform Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                    <p className='text-center mb-4'>Already have an account?<Link className='text-orange-400 font-bold' to={'/login'}>Login</Link></p>
                    <h2 className="text-center font-semibold text-2xl mt-5 mb-5">Continue With Google</h2>
                <div className="border w-[50px] mx-auto mb-10">
                    <button onClick={handleGoogle}><FaGoogle className="text-5xl px-3 py-3 w-full justify-center"></FaGoogle></button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Register;