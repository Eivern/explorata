import React from 'react'
import GuestLayout from "@/Layouts/GuestLayout";
import DestinationCard from '@/Components/cards/DestinationCard';

export default function Destinations() {
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
    {
      name: "Nusa Penida",
      image: "https://finnsbeachclub.com/wp-content/uploads/2023/12/kelingking-beach-nusa-penida-bali-indonesia-2023-11-27-05-02-05-utc-1024x672.jpg",
      badge: "Trending destination",
    },
    {
      name: "Nusa Penida",
      image: "https://finnsbeachclub.com/wp-content/uploads/2023/12/kelingking-beach-nusa-penida-bali-indonesia-2023-11-27-05-02-05-utc-1024x672.jpg",
      badge: "Trending destination",
    },
    {
      name: "Nusa Penida",
      image: "https://finnsbeachclub.com/wp-content/uploads/2023/12/kelingking-beach-nusa-penida-bali-indonesia-2023-11-27-05-02-05-utc-1024x672.jpg",
      badge: "Trending destination",
    },
    {
      name: "Nusa Penida",
      image: "https://finnsbeachclub.com/wp-content/uploads/2023/12/kelingking-beach-nusa-penida-bali-indonesia-2023-11-27-05-02-05-utc-1024x672.jpg",
      badge: "Trending destination",
    },
  ];

  return (
    <>
      <GuestLayout>
        <div className="min-h-screen pt-16 main-container"
        >
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((destination, index) => (
              <DestinationCard
                key={index}
                name={destination.name}
                image={destination.image}
                badge={destination.badge}
              />
            ))}
          </div>
        </div>
      </GuestLayout>
    </>
  )
}
