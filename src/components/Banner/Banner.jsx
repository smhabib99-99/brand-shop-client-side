

const Banner = () => {
    return (
        <div className="my-5 mx-5">
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/3yvW911/lamborghini.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl font-bold">Hi there!!! Your Dream Super Sports Car Journey Begins Here!!! </h1>
                        <p className="mb-5">Let Us Start Your Journey Now...</p>
                        <button className="btn bg-black text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;