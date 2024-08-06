import { Link } from "@inertiajs/react";
import React, { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white p-4 shadow-md">
            <div className="container mx-auto">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center cursor-pointer">
                        <Link href="/">
                            <img
                                src="logo.png"
                                alt="explorata"
                                className="h-16"
                            />
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center justify-center space-x-6">
                        <Link
                            href={route("about-us")}
                            className="text-gray-800 hover:text-blue-700 font-semibold"
                        >
                            About Us
                        </Link>
                        <Link
                            href={route("contact-us")}
                            className="text-gray-800 hover:text-blue-700 font-semibold"
                        >
                            Contact Us
                        </Link>
                        <Link
                            href={route("register")}
                            className="text-gray-800 hover:text-blue-700 font-semibold"
                        >
                            Destinations
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <Link
                            href={route("register")}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Sign Up
                        </Link>
                        <Link
                            href={route("login")}
                            className="bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded shadow-sm"
                        >
                            Login
                        </Link>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                            className="outline-none mobile-menu-button"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <svg
                                className="w-6 h-6 text-gray-800"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={`md:hidden ${
                    isOpen ? "h-56" : "h-0"
                } ease-in-out transition-all 200`}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link
                        href={route("register")}
                        className="text-gray-800 hover:bg-gray-300 block px-3 py-2 rounded-md text-base font-medium"
                    >
                        About Us
                    </Link>
                    <Link
                        href={route("register")}
                        className="text-gray-800 hover:bg-gray-300 block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Contact Us
                    </Link>
                    <Link
                        href={route("register")}
                        className="text-gray-800 hover:bg-gray-300 block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Destinations
                    </Link>
                    <Link
                        href={route("register")}
                        className=" hover:bg-gray-300  block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Sign Up
                    </Link>
                    <Link
                        href={route("login")}
                        className=" hover:bg-gray-300  block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
