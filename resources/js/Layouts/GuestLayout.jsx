import ApplicationLogo from "@/Components/ApplicationLogo";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/navbar";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <div className="bg-gray-100 ">
            <div>
                <Navbar />
            </div>

            <div>{children}</div>
            <div>
                <Footer />
            </div>
        </div>
    );
}
