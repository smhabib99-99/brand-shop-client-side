

const ServiceCard = ({ service }) => {

    const { brandName, brandImage } = service || {}

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={brandImage} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    
                    
                    <div className="card-actions">
                        <button className="btn bg-gray-900 text-white">{brandName}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;