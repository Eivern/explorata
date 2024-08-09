import { Link } from "@inertiajs/react";

export default function NavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                "inline-flex items-center font-semibold transition duration-150 ease-in-out focus:outline-none " +
                (active
                    ? "text-blue-700 border-b-2 border-blue-700"
                    : "text-gray-800") +
                className
            }
        >
            {children}
        </Link>
    );
}
