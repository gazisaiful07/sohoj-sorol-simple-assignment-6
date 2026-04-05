

const Newsletter = ()=> {
    return (
        <div className="bg-linear-to-r from-violet-500 to-purple-500 text-center text-white py-30">
            <div>
                <h1 className="text-5xl ">
                    Ready to Transform Your Workflow?
                </h1>
                <p className=" font-light tracking-wider pt-4">
                    Join thousands of professionals who are already using Digitools to work smarter. <br />Start your free trial today.
                </p>
            </div>
            <div className="flex justify-center gap-3 my-4">
                <button className=" cursor-pointer py-3 px-3.5 bg-white rounded-full text-purple-600 hover:bg-violet-500 hover:text-white">Explore Product</button>
                <button className=" cursor-pointer border py-3 px-3.5  rounded-full  hover:bg-violet-600 hover:text-white hover:border-none">Explore Product</button>
                
            </div>
            <p className="font-light tracking-wider">14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    );
};

export default Newsletter; Newsletter