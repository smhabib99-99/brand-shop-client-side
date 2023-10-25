
import { useContext } from 'react';
import toast from 'react-hot-toast';

import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {

    const { signInUser } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleLogin = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                e.target.reset();
                navigate('/');
            })
            .catch(error => {
                console.error(error)
            })


        // const handleGoogleSignIn = () => {

        //     signInWithGoogle()
        //         .then(result => {
        //             console.log(result.user)
        //         })
        //         .catch(error => {
        //             console.error(error)
        //         })
        // }

        // react-hot-toast
        if (password.length < 6) {
            toast.error("Input more than 6 characters");
            return;
        }
        else {
            toast.success("Successfully Registered!!!")
        }


    }


    return (

        <div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                            <p>
                                <span>New here?  Please</span> <Link to="/register"><button className="btn btn-link">Register</button></Link>
                            </p>

                            {/* <p>
                            <button type="submit" className="btn btn-secondary">Google login</button>
                                
                            </p> */}
                        </form>

                    </div>

                </div>

            </div>
        </div>
    );

};

export default Login;