const NavBar = () => {
  return (
    <div className="navbar max-w-7xl mx-auto">
      <div className="navbar-start">
        <div className="flex items-center gap-1 font-bold text-xl text-gradient-to-r from-violet-500 to-purple-500">
          <img src="" alt="" />
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
        <a href="">Login</a>
        <a className="btn bg-red-500 rounded-full text-white">Get in Touch</a>
      </div>
    </div>
  );
};

export default NavBar;