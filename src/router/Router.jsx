import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AddProduct from "../pages/AddProduct/AddProduct";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "../routerPrivate/PrivateRoute";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import ShowProduct from "../pages/ShowProduct/ShowProduct";
import UpdateProduct from "../pages/ShowProduct/UpdateProduct";


const router = createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path:'/',
                element:<Home></Home>,
                loader: ()=>fetch('/data.json')
            },
            {
                path:'/addProduct',
                element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/productDetail',
                element:<PrivateRoute><ProductDetail></ProductDetail></PrivateRoute>
            },
            {
                path:'/showProduct',
                element:<ShowProduct></ShowProduct>,
                loader:()=>fetch('https://brand-shop-server-6zamcshnh-habibs-projects-11338489.vercel.app/product')
            },
            {
                path:'/updateProduct/:id',
                element:<UpdateProduct></UpdateProduct>,
                loader:({params})=>fetch(`https://brand-shop-server-6zamcshnh-habibs-projects-11338489.vercel.app/product/${params.id}`)
            }
            // {
            //     path:'/updateProduct',
            // }
        ]
    }
])

export default router;