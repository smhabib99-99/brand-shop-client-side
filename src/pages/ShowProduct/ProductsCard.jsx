

const ProductsCard = ({product}) => {

    const {brand,model,type,price,description,rating,image} = product;

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className="h-40" src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl">Brand:{brand}</h2>
                    <h2 className="card-title">Model:{model}</h2>
                    <p>Price:${price}</p>
                    {/* <p>{description}</p> */}
                    <p>Type:{type}</p>
                    <span>Rating:{rating}*</span>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;