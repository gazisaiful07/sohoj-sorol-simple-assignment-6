import facebook from "../assets/Facebook.png";
import Instagram from "../assets/Instagram.png";
import Twitter from "../assets/Twitter.png";

const Footer = () => {
    return (
        <footer className="bg-slate-950 border-t border-red-900/50 pt-16 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between md:grid-cols-12 gap-12">
                    {/* Logo & Description */}
                    <div className="md:col-span-5">
                        <div className="flex items-center gap-3 mb-6">

                            <h2 className="text-4xl font-bold tracking-wider text-white">
                                DigiTools
                            </h2>
                        </div>

                        <p className="text-zinc-400 text-lg max-w-md">
                            Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-2">
                        <h3 className="text-white tracking-wider  mb-6 text-lg">Product</h3>
                        <ul className="space-y-4 text-zinc-400">
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Templates
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Integrations
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h3 className="text-white tracking-wider  mb-6 text-lg">Company</h3>
                        <ul className="space-y-4 text-zinc-400">
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Press
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="md:col-span-3">
                        <h3 className="text-white tracking-wider mb-6 text-lg">Resources</h3>
                        <ul className="space-y-4 text-zinc-400">
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Community
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="md:col-span-3">
                        <h3 className="text-white tracking-wider mb-6 text-lg">Social Links</h3>
                        <div className="flex gap-3">
                            <div>
                                <div><img src={facebook} alt="" /></div>
                            </div>
                            <div>
                                <img src={Instagram} alt="" />
                            </div>
                            <div>
                                <img src={Twitter} alt="" />
                            </div>
                        </div>

                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
                    <div>© {new Date().getFullYear()} © 2026 Digitools. All rights reserved.</div>

                    <div className="flex gap-6">
                        <a href="#">
                            Privacy Policy                      
                        </a>
                        <a href="#" >
                            Terms of Service
                        </a>
                        <a href="#">
                            Cookies
                        </a>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;