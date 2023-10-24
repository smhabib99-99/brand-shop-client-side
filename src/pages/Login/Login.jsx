
import {GoogleAuthProvider, getAuth, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { useState } from 'react';

const Login = () => {

    const [user,setUser] = useState(null);

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () =>{
        // console.log('google sign in is clicked.')
        signInWithPopup(auth,provider)
        .then(result=>{
            const loggedInUser = result.user;
            console.log(loggedInUser);
            setUser(loggedInUser);
        })
        .catch(error => {
            console.log('error',error.message)
        })
    }



    const handleSignOut = () => {
        signOut(auth)
        .then(result => {
            console.log(result);
            setUser(null);
        })
        .catch(error => {
            console.log(error)

        })
    }



    return (
        <div>
            {/* user? logout:sign in */}
            {
                user?
                <button onClick={handleSignOut}>Sign Out</button> :
                <button onClick={handleGoogleSignIn}>Google Login</button>
            }
            
            
            {
                user && <div>
                    <h2>User: {user.displayName}</h2>
                    
                    <p>Email: {user.email}</p>
                    <img src={user.photoURL}/>
                </div>
            }
        </div>
    );
};

export default Login;