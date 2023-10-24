

const ContactUs = () => {
    return (
        <div>

            <div className="block mx-auto mb-10 max-w-full items-center">
                <h2 className="text-3xl text-center mt-14 bg-black text-white font-medium  mx-5 py-5">Contact Us</h2>
                <div className="">
                    <h2 className="text-2xl py-4 text-center font-normal">Request a Quote</h2>
                </div>

                <div className="flex item-center">

                    <form className=" mx-auto bg-sky-50 items-center border">
                        <div >
                            <div className=" md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className=" min-w-full  uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    First Name
                                </label>
                                <input className="appearance-none block bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                                {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                            </div>
                            <div className=" md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Last Name
                                </label>
                                <input className="appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                            </div>
                        </div>
                        <div className="flex flex-wrap mb-6">
                            <div className="px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    E-mail
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Your Name" id="email" type="email" />
                                {/* <p className="text-gray-600 text-xs italic">Some tips - as long as needed</p> */}
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="px-6">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Message
                                </label>
                                <textarea className=" -px-3 no-resize appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
                                {/* <p className="text-gray-600 text-xs italic">Re-size can be disabled by set by resize-none / resize-y / resize-x / resize</p> */}
                            </div>
                        </div>
                        <div className="md:flex md:items-center">
                            <div className="md:w-1/3">
                                <button className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-5 rounded" type="button">
                                    <p className="text-center">Send</p>
                                </button>
                            </div>
                            {/* <div className="md:w-2/3"></div> */}
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default ContactUs;