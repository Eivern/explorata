import React from 'react'
import { Link, Head } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import DestinationCard from '@/Components/cards/DestinationCard';

export default function Destinations(props) {
  const destinations = props.destinations

  return (
    <>
      <Head title={props.title} />
      <GuestLayout>
        <div className="min-h-screen pt-16 main-container"
        >
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((destination, index) => (
              <DestinationCard
                key={index}
                name={destination.name}
                image={destination.images[0]}
                badge={destination.badge}
              />
            ))}
          </div>
        </div>
      </GuestLayout>
    </>
  )
}