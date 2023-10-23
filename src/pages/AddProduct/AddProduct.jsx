

const AddProduct = () => {
    return (
        <div>
            <form className="mx-5 my-8 p-24">
                <h2 className="text-3xl text-center font-extrabold bg-slate-700 py-5 text-white">Please input the form to add product.</h2>
                {/* Model and Brand Name */}
                <div className="md:flex ">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brand" placeholder="Brand Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label ml-4">
                            <span className="label-text">Model Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="model" placeholder="Model Name" className="input input-bordered w-full ml-4" />
                        </label>
                    </div>
                </div>
                {/* Type and Price */}
                <div className="md:flex">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Product Type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="type" placeholder="Product Type" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label ml-4">
                            <span className="label-text ">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full ml-4" />
                        </label>
                    </div>
                </div>
                {/*  */}
                <div className="md:flex">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label ml-4">
                            <span className="label-text ">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full ml-4" />
                        </label>
                    </div>
                </div>
                {/* Image and Add button */}
                <div className="md:flex mb-5">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="Image" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        {/* <label className="label ml-4">
                            <span className="label-text ">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full ml-4" />
                        </label> */}
                        {/* <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Responsive</button> */}
                    </div>
                </div>
                <button type="submit" value="Add Product" className="btn bg-gray-900 text-lime-500 btn-block py-4">Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;