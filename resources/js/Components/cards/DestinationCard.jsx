const DestinationCard = (props) => {
  return (
    <div
      key={props.index}
      className="relative rounded-lg overflow-hidden shadow-lg mx-4"
    >
      <img
        src={props.image}
        alt={props.name}
        className="w-full h-64 object-cover hover:scale-110 cursor-pointer"
      />
      {props.badge && (
        <span className="absolute top-2 left-2 bg-orange-500 text-white text-sm px-2 py-1 rounded-full">
          {props.badge}
        </span>
      )}
      <div className="p-4 bg-white">
        <h3 className="text-xl font-bold text-gray-900">
          {props.name}
        </h3>
      </div>
    </div>
  )
}

export default DestinationCard