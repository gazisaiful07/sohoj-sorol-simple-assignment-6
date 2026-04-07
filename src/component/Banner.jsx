import BannerImage from "../assets/banner.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'


const Banner = () => {
  return (
    <div className="relative min-h-162.5 flex items-center overflow-hidden">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 bg-indigo-100  text-purple-700 text-sm font-medium px-5 py-2 rounded-full ">
            <div className="animate-spin"><FontAwesomeIcon icon={faStarOfLife} /></div> New: AI-Powered Tools Available
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight  text-black-50 tracking-wider">
            Supercharge Your
            <br />
            <span className="">
              Digital Workflow
            </span>
          </h1>

          <p className="text-lg text-zinc-500 max-w-lg font-light tracking-wide">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.

            Explore Products
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="btn bg-linear-to-r from-violet-500 to-purple-500 rounded-full text-white">
              Explore Products
            </button>
            <button className="btn rounded-full bg-transparent border border-purple-600 text-purple-600 ">
              <div className="animate-ping"><FontAwesomeIcon icon={faPlay} /></div> Watch Demo
            </button>
          </div>

          
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <img
              className="relative h-130 w-auto object-contain rounded-lg "
              src={BannerImage}
              alt="AI Models Banner"
            />
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Banner;