import ServiceCard from "./ServiceCard";
import PropTypes from 'prop-types';

const Services = ({services}) => {
    return (
        <div className="mx-5">
            <h2 className="text-center text-3xl bg-gray-900 py-5 text-white">Brands We Sell</h2>
            <div className="grid md:grid-cols-3 block mx-auto gap-4 py-5 my-5">
                {
                    services?.map(service=><ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;

Services.propTypes={
    services:PropTypes.node
}