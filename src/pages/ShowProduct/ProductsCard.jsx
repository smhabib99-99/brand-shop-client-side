import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const ProductsCard = ({ product }) => {

    const { _id, brand, model, type, price, description, rating, image } = product;

    const hadleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://brand-shop-server-6zamcshnh-habibs-projects-11338489.vercel.app/product/${_id}`,{
                    method:'DELETE'
                })
                    .then(res => res.json())
                    .then(
                        data => {
                            console.log(data);
                            if (data.deleteCount > 0) {

                                  Swal.fire(
                                    'Deleted!',
                                    'Your file has been deleted.',
                                    'success'
                                  )
                            }
                        }
                    )


            }
        })
    }

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
                        {/* <button className="btn btn-primary">Details</button> */}
                        <div className="btn-group btn-group-vertical space-y-4">
                            <button className="btn btn-active">Details</button>
                            <button onClick={() => hadleDelete(_id)} className="btn bg-red-500 rounded-md">Delete</button>
                       <Link to={`updateProduct/${_id}`}>
                       <button
                                className="btn bg-green-500">Update</button>
                       </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;