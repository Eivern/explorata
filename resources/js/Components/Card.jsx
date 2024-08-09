import { Link } from "@inertiajs/react";

export default function Card({
    id,
    title,
    description,
    image,
    badge,
    className = "",
    titleClassName = "text-gray-900 text-xl",
    ...props
}) {
    return (
        <div
            {...props}
            className={`relative rounded-lg overflow-hidden shadow-lg ${className}`}
        >
            {image && (
                <img
                    src={`/storage/${image}`}
                    alt={title}
                    className="w-full h-64 md:h-80 object-cover overflow-hidden scale-110 cursor-pointer"
                />
            )}
            {badge && (
                <span className="absolute top-2 left-2 bg-orange-500 text-white text-sm px-2 py-1 rounded-full">
                    {badge}
                </span>
            )}
            <div className="px-4 py-8 flex flex-col gap-y-2 rounded-lg">
                {title && (
                    <h2 className={` font-bold ${titleClassName}`}>{title}</h2>
                )}
                {description && <p className="text-justify">{description}</p>}
                {id &&
                    <Link
                        href={`/destinations/${id}`}
                        className=""
                    >
                        Lihat Detail
                    </Link>
                }
            </div>
        </div>
    );
}
