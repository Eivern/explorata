import { Link, Head } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const destinations = [
        {
            name: "Mount Batur",
            image: "https://www.intrepidtravel.com/adventures/wp-content/uploads/2016/04/indonesia_bali_mount-batur.jpg",
            badge: "Trending destination",
        },
        {
            name: "Pandawa Beach",
            image: "https://digitaltravelcouple.com/wp-content/uploads/2020/03/pandawa-beach-bali-1.jpg",
            badge: "Trending destination",
        },
        {
            name: "Nusa Penida",
            image: "https://finnsbeachclub.com/wp-content/uploads/2023/12/kelingking-beach-nusa-penida-bali-indonesia-2023-11-27-05-02-05-utc-1024x672.jpg",
            badge: "Trending destination",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };
    return (
        <>
            <Head title="Welcome" />
            <GuestLayout>
                <div
                    className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1559305289-4c31700ba9cb?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    }}
                >
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative text-center text-white p-4">
                        <h1 className="text-6xl font-bold mb-4">
                            Explore the Wonders
                        </h1>
                        <p className="text-xl mb-8">
                            Discover breathtaking destinations and adventures
                            with Explorata.
                        </p>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Get Started
                        </button>
                    </div>
                </div>
                <section className="py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-8">
                            <h2 className="text-4xl font-black text-gray-900">
                                Plan your trip
                            </h2>
                            <p className="text-xl text-gray-600">
                                Where to next?
                            </p>
                        </div>
                        <div className="flex justify-end mb-8">
                            <button className="bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded-full">
                                View all destinations
                            </button>
                        </div>
                        <div className="md:hidden">
                            <Slider {...settings}>
                                {destinations.map((destination, index) => (
                                    <div
                                        key={index}
                                        className="relative rounded-lg overflow-hidden shadow-lg "
                                    >
                                        <img
                                            src={destination.image}
                                            alt={destination.name}
                                            className="w-full h-64 object-cover mx-4 hover:scale-110 cursor-pointer transition-all ease-in-out duration-1000"
                                        />
                                        {destination.badge && (
                                            <span className="absolute top-2 left-2 bg-orange-500 text-white text-sm px-2 py-1 rounded-full">
                                                {destination.badge}
                                            </span>
                                        )}
                                        <div className="p-4 bg-white">
                                            <h3 className="text-xl font-bold text-gray-900">
                                                {destination.name}
                                            </h3>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {destinations.map((destination, index) => (
                                <div
                                    key={index}
                                    className="relative rounded-lg overflow-hidden shadow-lg mx-4"
                                >
                                    <img
                                        src={destination.image}
                                        alt={destination.name}
                                        className="w-full h-64 object-cover hover:scale-110 cursor-pointer transition-all ease-in-out duration-1000"
                                    />
                                    {destination.badge && (
                                        <span className="absolute top-2 left-2 bg-orange-500 text-white text-sm px-2 py-1 rounded-full">
                                            {destination.badge}
                                        </span>
                                    )}
                                    <div className="p-4 bg-white">
                                        <h3 className="text-xl font-bold text-gray-900">
                                            {destination.name}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </GuestLayout>
        </>
    );
}
