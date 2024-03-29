
import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {
    const navigate = useNavigate();

    const {user,logOut,signInWithGoogle} = useContext(AuthContext);

    const handleLogOut = () =>{

        logOut()
        .then(()=>{
            console.log("log out successful")
        })
        .catch(error=>console.error(error))
    }

    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result=>{
            console.log(result.user);
            navigate('/')
        })
        .catch(error=>{
            console.error(error);
        })
    }

    const navLinks = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/login'>Login</NavLink></li>
    <li><NavLink to='/register'>Register</NavLink></li>
    <li><NavLink to='/addProduct'>Add Product</NavLink></li>
    <li><NavLink to='/productDetail'>Product Detail</NavLink></li>
    <li><NavLink to='/showProduct'>Product</NavLink></li>
    

    

    {
        user && <>
        <li><NavLink to='/myCart'>My Cart</NavLink></li>
        <li><NavLink to='/updateProduct'>Update Product</NavLink></li>
        </>
    }


    {/* <li><NavLink to='/about'>About Us</NavLink></li> */}
    {/* <li><NavLink to='/contactUs'>Contact Us</NavLink></li> */}
    {/* <li><NavLink to='/authorizedShop'>Authorized Shop</NavLink></li> */}
    </>


    return (
        <div className='mx-4'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-56">
                            {/* <li><a>Item 1</a></li> */}
                            {navLinks}
                            {/* <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li> */}
                        </ul>
                    </div>
                    <div className='flex'>
                    <a className="btn btn-ghost text-white bg-neutral-950 md:h-14 normal-case md:text-3xl">AutoSpaceZ</a>
                    <img className='w-6 md:w-24 md:h-14 rounded-md ml-2' src="/AutoSpaceZ2.png" alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                        {/* <li><a>Item 1</a></li>
                        <li tabIndex={0}>
                            <details>
                                <summary>Parent</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Item 3</a></li> */}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                             <>
                             <span>{user.email}</span>
                             <img className='rounded-lg w-10' src={user.photoURL} alt="" />
                             <a onClick={handleLogOut} className="btn bg-black text-white">Log out</a>

                             </>   :
                             <Link to="/login">
                                <button className='btn btn-sm'>Login</button>
                            <button onClick={handleGoogleSignIn} type="submit" className="btn-sm btn-ghost rounded-md bg-black text-white">Google Login</button>

                             </Link>
                                              
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;