import ServiceCard from "./ServiceCard";


const Services = ({services}) => {
    return (
        <div>
            <h2 className="text-center text-3xl bg-gray-900 py-5 mx-5 text-white">Brands Here</h2>
            <div className="grid md:grid-cols-3 block mx-auto gap-4 py-5 my-5">
                {
                    services?.map(service=><ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;