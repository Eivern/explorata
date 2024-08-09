import Footer from "@/Components/Footer";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "@/Components/Card";
import Modal from "@/Components/Modal";
import { useState } from "react";

export default function Dashboard({ auth }) {
    const destinations = [
        {
            title: "Komodo Island",
            image: "https://images.unsplash.com/photo-1565369729454-0e5cd240b4b9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description:
                "Komodo Island, located in the Indonesian archipelago, is renowned for its unique inhabitants, the Komodo dragons. It's a UNESCO World Heritage site offering stunning landscapes, pristine beaches, and diverse marine life. Explore the island's rugged terrain and witness the awe-inspiring Komodo dragons in their natural habitat.",
        },
        {
            title: "Tanah Lot",
            image: "https://images.unsplash.com/photo-1555865138-193ba536d7e0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description:
                "Tanah Lot is one of Bali's most iconic sea temples, perched on a rocky outcrop in the Indian Ocean. Known for its stunning sunset views and unique offshore setting, this sacred temple offers a picturesque experience, reflecting Balinese culture and spirituality amid spectacular coastal scenery.",
        },
        {
            title: "Raja Ampat",
            image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description:
                "Raja Ampat, an archipelago located off the northwest tip of Papua, is renowned for its unparalleled marine biodiversity. It features crystal-clear waters, stunning coral reefs, and a variety of marine species. Ideal for diving and snorkeling enthusiasts, Raja Ampat offers a pristine escape into nature’s underwater wonders.",
        },
        {
            title: "Prambanan Temple",
            image: "https://plus.unsplash.com/premium_photo-1700954878958-30363bc9ec5c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description:
                "Prambanan Temple, located near Yogyakarta, is a magnificent 9th-century Hindu temple complex. It is known for its tall and elegant spires, intricate carvings, and stunning architecture. The temple is a UNESCO World Heritage site and offers a glimpse into the rich history and artistry of ancient Java.",
        },
        {
            title: "Gili Islands",
            image: "https://images.unsplash.com/photo-1711365100888-1fa2378ed4d4?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description:
                "The Gili Islands are a trio of small islands located off the northwest coast of Lombok. Known for their crystal-clear waters, vibrant coral reefs, and relaxed atmosphere, the Gilis are a popular destination for snorkeling, diving, and beach relaxation. Each island has its unique charm, with no motorized vehicles and a laid-back vibe.",
        },
        {
            title: "Lake Toba",
            image: "https://images.unsplash.com/photo-1623598122059-9b5ef17619c8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            description:
                "Lake Toba, located in North Sumatra, is the largest volcanic lake in the world and a stunning natural wonder. Formed by a massive volcanic eruption, the lake is surrounded by beautiful highlands and traditional Batak villages. Visitors can enjoy scenic views, boat trips, and explore the local culture and history of the region.",
        },
    ];

    const [selectedTouristAttractions, setSelectedTouristAttractions] =
        useState([]);
    const [showModal, setShowModal] = useState(false);

    const handleClickTouristAttractions = (destination, title, attractions) => {
        setSelectedTouristAttractions({
            destination: destination,
            title: title,
            attractions: attractions,
        });
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const touristAttractions = [
        {
            destination: "Bali",
            title: "Explore 5 tourist attractions in Bali",
            attractions: [
                "Pantai Kuta",
                "Ubud",
                "Pura Tanah Lot",
                "Tegallalang Rice Terrace",
                "Pura Besakih",
            ],
            image: "https://plus.unsplash.com/premium_photo-1677829177642-30def98b0963?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFsaXxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
            destination: "Yogyakarta",
            title: "Explore 5 tourist attractions in Yogyakarta",
            attractions: [
                "Candi Borobudur",
                "Candi Prambanan",
                "Keraton Yogyakarta",
                "Pantai Parangtritis",
                "Taman Sari",
            ],
            image: "https://images.unsplash.com/photo-1643762618827-f2c7606f20af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fENhbmRpJTIwQm9yb2J1ZHVyfGVufDB8fDB8fHww",
        },
        {
            title: "Explore 5 tourist attractions in Jakarta",
            destination: "Jakarta",
            attractions: [
                "Monumen Nasional (Monas)",
                "Taman Mini Indonesia Indah",
                "Kepulauan Seribu",
                "Museum Nasional Indonesia",
                "Kota Tua Jakarta",
            ],
            image: "https://images.unsplash.com/photo-1697797738337-3c9faa013240?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RHVmYW58ZW58MHx8MHx8fDA%3D",
        },
        {
            title: "Explore 5 tourist attractions in Bandung",
            destination: "Bandung",
            attractions: [
                "Kawah Putih",
                "Tangkuban Perahu",
                "Trans Studio Bandung",
                "Farmhouse Lembang",
                "Dusun Bambu",
            ],
            image: "https://plus.unsplash.com/premium_photo-1697644693303-d6e0660a1a8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2l0dXBhdGVuZ2dhbmclMjBsYWtlfGVufDB8fDB8fHww",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };

    // console.log(auth);
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            <div>
                <div className="flex flex-col gap-y-4 mx-auto sm:px-6 lg:px-8">
                    <div
                        className="bg-white overflow-hidden h-svh md:h-0 shadow-sm sm:rounded-lg relative py-52 md:py-64 bg-cover bg-center flex items-center justify-center"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1505993597083-3bd19fb75e57?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                        }}
                    >
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className="relative text-center text-white px-6 md:px-20 lg:px-48">
                            <div className="relative mx-auto bg-white w-fit overflow-hidden mb-4 shadow-sm rounded-lg">
                                <div className="p-4 text-gray-900 text-base md:text-lg xl:text-2xl font-extrabold text-center">
                                    Welcome, {auth.user.name}
                                </div>
                            </div>

                            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-4">
                                Unlock the Wonders of the world with
                                Explorata's.
                            </h1>
                            <p className="text-sm md:text-base lg:text-lg mb-8">
                                Dive into expertly curated destinations tailored
                                to your tastes, and discover adventures that
                                will inspire and amaze you. From hidden gems to
                                must-see landmarks, we’ve got the perfect travel
                                suggestions to make your journey unforgettable.
                                Start exploring now!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-12">
                <div className="flex flex-col gap-y-4 mx-auto sm:px-6 lg:px-8">
                    <h1 className="text-center xl:text-start text-lg md:text-2xl font-bold text-slate-900">
                        Handpicked Destinations You’ll Love
                    </h1>

                    <div className="lg:hidden mx-4  ">
                        <Slider {...settings}>
                            {destinations.map((destination, index) => (
                                <Card key={index} {...destination} />
                            ))}
                        </Slider>
                    </div>

                    <div className="hidden lg:grid grid-cols-3 gap-4 relative">
                        {destinations.map((destination, index) => (
                            <div
                                key={index}
                                className="relative group cursor-pointer "
                            >
                                <img
                                    src={destination.image}
                                    alt={destination.title}
                                    className="w-full h-72 object-cover z-10 rounded-lg"
                                />
                                <h1 className="absolute bottom-4 group-hover:bg-transparent  left-4 text-white text-2xl font-bold bg-black bg-opacity-50 p-2 rounded z-20 transition-all duration-500 ease-in">
                                    {destination.title}
                                </h1>
                                <p className="absolute inset-0 text-justify flex items-center justify-center text-white text-base bg-black bg-opacity-75 p-4 rounded opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in">
                                    {destination.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mx-auto sm:px-6 lg:px-8">
                <h1 className="text-center xl:text-start py-4 text-lg md:text-2xl font-bold text-slate-900">
                    Your Guide to Indonesia's Must-Visit Tourist Attractions
                </h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4 mx-4 md:mx-0">
                    {touristAttractions.map((tourist, index) => (
                        <div
                            key={index}
                            className="shadow-sm rounded-md relative bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${tourist.image})`,
                            }}
                        >
                            <Card
                                onClick={() =>
                                    handleClickTouristAttractions(
                                        tourist.destination,
                                        tourist.title,
                                        tourist.attractions
                                    )
                                }
                                title={tourist.title}
                                className="bg-transparent py-6 cursor-pointer group"
                                titleClassName="group-hover:underline underline-offset-2 text-white text-2xl"
                            />
                        </div>
                    ))}

                    <div>
                        {showModal && (
                            <Modal show={showModal} onClose={handleCloseModal}>
                                <div className="p-4">
                                    <h2 className="text-2xl font-semibold mb-4">
                                        {selectedTouristAttractions.title} -{" "}
                                        <span className="text-blue-500">
                                            {
                                                selectedTouristAttractions.destination
                                            }
                                        </span>
                                    </h2>
                                    <p className="text-gray-600 mb-4">
                                        Here are some recommended tourist
                                        attractions in{" "}
                                        {selectedTouristAttractions.destination}
                                        :
                                    </p>
                                    <ul className="list-disc list-inside pl-4">
                                        {selectedTouristAttractions.attractions.map(
                                            (attraction, index) => (
                                                <li
                                                    key={index}
                                                    className="text-gray-800"
                                                >
                                                    {attraction}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </Modal>
                        )}
                    </div>
                </div>
            </div>

            <div className="pt-10">
                <Footer />
            </div>
        </AuthenticatedLayout>
    );
}
