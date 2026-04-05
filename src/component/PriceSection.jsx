

const PriceSection = () => {
    return (
        <div className="my-30 ">
            <div className="text-center">
                <h1 className="text-5xl font-extrabold tracking-wider">Simple, Transparent Pricing</h1>
                <p className="mt-6 text-gray-500 font-light tracking-widest">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className="flex mx-auto justify-center gap-7.5 mt-10">
                <div className=" shadow rounded-lg bg-gray-50 border border-zinc-100  p-6 ">
                    <div className="">
                        <h2 className="text-3xl font-bold tracking-wide">Starter</h2>
                        <p className="text-gray-700">Perfect for getting started</p></div>
                    <p className="mt-6"> <span className="text-5xl font-bold">$0</span>/Month</p>
                    <div className="my-6 pb-14 font-light text-gray-700 tracking-wider ">
                        <p>Access to 10 free tools</p>
                        <p>Basic templates</p>
                        <p>Community support</p>
                        <p>1 Project per month</p>
                    </div>
                    <button className=" bg-linear-to-r from-violet-500 to-purple-500   text-white mt-5 rounded-full py-3 px-25.5">Get Started Free</button>
                </div>
                <div className=" shadow rounded-lg bg-linear-to-r from-violet-500 to-purple-500 border border-zinc-100 p-6 relative  ">
                    <div class="absolute -top-3 left-1/2 -translate-x-1/2">
    <span class="bg-orange-200 text-orange-600 text-sm px-4 py-1 rounded-full shadow">
      Most Popular
    </span>
  </div>
                    <div className=" text-white">
                        <h2 className="text-3xl font-bold tracking-wide">Pro</h2>
                        <p className=" text-white font-extralight">Best for professionals</p>
                    </div>
                    <p className=" text-white mt-6"> <span className="text-5xl font-bold">$29</span>/Month</p>
                    <div className="my-6 text-white font-light tracking-wider">
                        <p>Access to all premium tools</p>
                        <p>Unlimited templates</p>
                        <p>Priority support</p>
                        <p>Unlimited projects</p>
                        <p>Cloud sync</p>
                        <p>Advanced analytics</p>
                    </div>
                    <button className="  bg-white text-purple-600 mt-5 rounded-full py-3 px-25.5 tracking-wider">Start Pro Trial</button>
                </div>
                <div className=" shadow rounded-lg bg-gray-50 border border-zinc-100 p-6  ">
                    <div className="">
                        <h2 className="text-3xl font-bold tracking-wide">Enterprise</h2>
                        <p className="text-gray-700">For teams and businesses</p></div>
                    <p className="mt-6"> <span className="text-5xl font-bold">$99</span>/Month</p>
                    <div className="my-6 font-light text-gray-700 tracking-wider">
                        <p>Everything in Pro</p>
                        <p>Team collaboration</p>
                        <p>Custom integrations</p>
                        <p>Dedicated support</p>
                        <p>SLA guarantee</p>
                        <p>Custom branding</p>
                    </div>
                    <button className="bg-linear-to-r from-violet-500 to-purple-500   text-white mt-5 rounded-full py-3 px-25.5">Get Started Free</button>
                </div>
            </div>
        </div>
    )


}

export default PriceSection;