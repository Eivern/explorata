import { Link } from "@inertiajs/react";
import React, { useState } from "react";
import Dropdown from "@/Components/Dropdown";

const Navbar = ({ user }) => {
    const [isOpen, setIsOpen] = useState(false);
    const currentPath = window.location.pathname.split("/")[1];

    const navLinkDesktop = [
        {
            name: "About Us",
            href: "about-us",
        },
        {
            name: "Contact Us",
            href: "contact-us",
        },
        {
            name: "Destinations",
            href: "destinations",
        },
    ];
    const navLinkMobile = [
        {
            name: "About Us",
            href: "about-us",
        },
        {
            name: "Contact Us",
            href: "contact-us",
        },
        {
            name: "Destinations",
            href: "destinations",
        },
        {
            name: "Login",
            href: "login",
        },
        {
            name: "Sign Up",
            href: "register",
        },
    ];

    return (
        <nav className="bg-white p-4 shadow-md">
            <div className="container mx-auto">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center cursor-pointer">
                        <Link href="/">
                            <img
                                src="/logo.png"
                                alt="explorata"
                                className="h-16"
                            />
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center justify-center space-x-6">
                        {navLinkDesktop.map((link, index) => (
                            <Link
                                key={index}
                                href={route(link.href)}
                                className={` hover:text-blue-700 font-semibold ${link.href === currentPath
                                    ? "text-blue-700 border-b-2 border-blue-700"
                                    : "text-gray-800"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    {!user ?
                        (
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
                        ) :
                        (
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <span className="inline-flex rounded-md">
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-3 py-2 border border-transparent leading-4 font-semibold rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                        >
                                            {user.name}

                                            <svg
                                                className="ms-2 -me-0.5 h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </span>
                                </Dropdown.Trigger>

                                <Dropdown.Content>
                                    <Dropdown.Link
                                        href={route("profile.personal")}
                                    >
                                        Profile
                                    </Dropdown.Link>
                                    <Dropdown.Link
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                    >
                                        Log Out
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        )
                    }
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
                className={`md:hidden ${isOpen ? "h-56" : "h-0"
                    } ease-in-out transition-all 200`}
            >
                <div
                    className={`md:hidden ${isOpen ? "block" : "hidden"
                        } px-2 pt-2 pb-3 space-y-1 sm:px-3`}
                >
                    {navLinkMobile.map((link, index) => (
                        <Link
                            key={index}
                            href={route(link.href)}
                            className={` block px-3 py-2 rounded-md text-base font-medium ${link.href === currentPath
                                ? "bg-blue-500 text-white"
                                : "text-gray-800"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
