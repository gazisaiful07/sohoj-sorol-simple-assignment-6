import UserImage from "../assets/user.png";
import ProductImage from "../assets/package.png";
import RocketImage from "../assets/rocket.png";

const AccountSection = () => {
    return (
        <div className="bg-gray-50 py-30 mt-10">
            <div className="text-center">
                <h1 className="text-5xl font-medium  tracking-wider">Get Started in 3 Steps</h1>
                <p className="font-light pt-3 text-gray-500">Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className=" flex justify-center gap-7.5 mt-10">
                <div className="shadow rounded-lg  border border-zinc-100 px-5 pt-5 pb-22 bg-white">
                    <div className="flex justify-end">
                        <p className="bg-purple-600 text-2xl text-white py-2 px-3 rounded-full">01</p>
                    </div>
                    <div className="text-center flex flex-col items-center mt-5 ">
                        <div className="bg-purple-100 py-4 px-5 rounded-full">
                            <img className="" src={UserImage} alt="" />
                        </div>
                        <h4 className="text-3xl font-medium pt-3">Create Account</h4>
                        <p className="text-gray-700 tracking-wider pt-3 font-light">Sign up for free in seconds. No credit card <br />required to get started.</p>
                    </div>
                </div>
                <div className="shadow rounded-lg bg-white  border border-zinc-100 px-5 pt-5 pb-22">
                    <div className="flex justify-end">
                        <p className="bg-purple-600 text-2xl text-white py-2 px-3 rounded-full">02</p>
                    </div>
                    <div className="text-center flex flex-col items-center mt-5 ">
                        <div className="bg-purple-100 py-4 px-5 rounded-full">
                            <img className="" src={ProductImage} alt="" />
                        </div>
                        <h4 className="text-3xl font-medium pt-3">Choose Products</h4>
                        <p className="text-gray-700 tracking-wider pt-3 font-light">Browse our catalog and select the tools <br />that fit your needs.</p>
                    </div>
                </div>
                <div className="shadow rounded-lg bg-white border border-zinc-100 px-5 pt-5 pb-22">
                    <div className="flex justify-end">
                        <p className="bg-purple-600 text-2xl text-white py-2 px-3 rounded-full">03</p>
                    </div>
                    <div className="text-center flex flex-col items-center mt-5 ">
                        <div className="bg-purple-100 py-4 px-5 rounded-full">
                            <img className="" src={RocketImage} alt="" />
                        </div>
                        <h4 className="text-3xl font-medium pt-3">Start Creating</h4>
                        <p className="text-gray-700 tracking-wider pt-3 font-light">Download and start using your premium <br />tools immediately.</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default AccountSection;