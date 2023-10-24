
// import {GoogleAuthProvider, getAuth, signInWithPopup, signOut} from 'firebase/auth';
// import app from '../../firebase/firebase.config';
// import { useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';

import { Link } from "react-router-dom";
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {

    const {signInUser} = useContext(AuthContext);


    const handleLogin = e => {
        e.preventDefault();
        // console.log('form submitted.')
        // const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        signInUser(email,password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error=>{
            console.error(error)
        })


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
                        {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
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
                            {/* <button type="submit" onSubmit={handleGoogleSignIn} className="btn btn-secondary">Google Login</button> */}
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );






    // const [user,setUser] = useState(null);

    // const auth = getAuth(app);
    // const provider = new GoogleAuthProvider();

    // const handleGoogleSignIn = () =>{
    //     console.log('google sign in is clicked.')
    //     signInWithPopup(auth,provider)
    //     .then(result=>{
    //         const loggedInUser = result.user;
    //         console.log(loggedInUser);
    //         setUser(loggedInUser);
    //     })
    //     .catch(error => {
    //         console.log('error',error.message)
    //     })
    // }



    // const handleSignOut = () => {
    //     signOut(auth)
    //     .then(result => {
    //         console.log(result);
    //         setUser(null);
    //     })
    //     .catch(error => {
    //         console.log(error)

    //     })
    // }



    // return (
    //     <div>
    //         {/* user? logout:sign in */}
    //         {
    //             user?
    //             <button onClick={handleSignOut}>Sign Out</button> :
    //             <button onClick={handleGoogleSignIn}>Google Login</button>
    //         }


    //         {
    //             user && <div>
    //                 <h2>User: {user.displayName}</h2>

    //                 <p>Email: {user.email}</p>
    //                 <img src={user.photoURL}/>
    //             </div>
    //         }
    //     </div>
    // );
};

export default Login;