import Badge from "../Badge"
import { Link } from "@inertiajs/react";

const DestinationCard = ({ destination }) => {
  console.log(destination);
  return (
    <div
      className="relative rounded-lg overflow-hidden shadow-lg mx-4"
    >
      <img
        src={`/storage/${destination.images[0]}`}
        alt={destination.name}
        className="w-full h-64 object-cover hover:scale-110 cursor-pointer"
      />
      {destination.badge && (
        <Badge>{destination.badge}</Badge>
      )}
      <div className="p-4 bg-white">
        <h3 className="text-xl font-bold text-gray-900">
          {destination.name}
        </h3>
        <Link
          href={`/destinations/${destination.id}`}
          className=""
        >
          Lihat Detail
        </Link>
      </div>
    </div>
  )
}

export default DestinationCard