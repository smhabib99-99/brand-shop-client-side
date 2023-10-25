import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";


const Register = () => {

    
    const {createUser} = useContext(AuthContext)
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        // console.log('form submitted.')
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password)

        createUser(email,password)
        .then(result=>{
            console.log(result.user);
            e.target.reset();
            navigate('/');
        })
        .catch(error=>{
            console.error(error);
        })


        // react-hot-toast
        if (password.length < 6) {
            Swal.fire({
                title: 'Error!',
                text: 'Password must be greater than 6 character.',
                icon: 'error',
                confirmButtonText: 'Try Again'
              })
            return;
        }
        else {
            Swal.fire({
                title: 'Success!',
                text: 'You Successfully Logged In!',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }



        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error);
            })




    }



    return (
        <div>



            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                            </div>
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
                                <button className="btn btn-primary">Register</button>
                            </div>

                            <p>
                                <span>Already Have Account? Login.</span> <Link to="/login"><button className="btn btn-link">Login</button></Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Register;