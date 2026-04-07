import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Cart from './Cart';
const NavBar = () => {
  return (
    <div className="navbar max-w-7xl mx-auto">
      <div className="navbar-start">
        <div className="flex items-center gap-1 font-bold text-xl text-gradient-to-r from-violet-500 to-purple-500">
          <img src="./src/assets/DigiTools.png" alt="" />
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-5 px-1 text-lg">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-5">
        <div className='cursor-pointer'><FontAwesomeIcon icon={faCartShopping} />{Cart}</div>
        <a href="">Login</a>
        <a className="btn bg-linear-to-r from-violet-500 to-purple-500 rounded-full text-white">Get Started</a>
      </div>
    </div>
  );
};

export default NavBar;