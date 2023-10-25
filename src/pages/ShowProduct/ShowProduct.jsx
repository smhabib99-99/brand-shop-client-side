import { useLoaderData } from "react-router-dom";
import ProductsCard from "./ProductsCard";


const ShowProduct = () => {

    const products = useLoaderData();

    return (
        <div className="m-20">

            <h1 className="text-5xl bg-black py-5 text-white text-center">All Products</h1>

            <div className="grid md:grid-cols-2 gap-5 h-20">
                {
                    products.map(product => <ProductsCard key={product._id} product={product}></ProductsCard>)
                }
            </div>

        </div>
    );
};

export default ShowProduct;