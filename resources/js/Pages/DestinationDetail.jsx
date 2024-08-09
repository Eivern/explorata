import React, { useState, useEffect } from 'react'
import { Link, Head, usePage } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Badge from '@/Components/Badge';
import formatRupiah from '@/Utils/formatRupiah';
import { Inertia } from '@inertiajs/inertia';

export default function DestinationDetail(props) {
  const destination = props.destination
  const [isBookmarked, setIsBookmarked] = useState(props.isBookmarked)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  const bookmark = () => {
    Inertia.post(`/bookmark/destination/${destination.id}`)
    setIsBookmarked(true)
  }

  const unbookmark = () => {
    Inertia.post(`/unbookmark/destination/${destination.id}`)
    setIsBookmarked(false)
  }


  return (
    <>
      <Head title="Destination Detail" />
      <GuestLayout>
        <div className="main-container min-h-screen pt-16 pb-32">
          <div className="relative w-full p-8 bg-white rounded-xl shadow-lg">
            <button
              className="absolute top-8 right-8"
              onClick={() => { !isBookmarked ? bookmark() : unbookmark() }}
            >
              {!isBookmarked ? 'Bookmark' : 'Unbookmark'}
            </button>
            <h1 className="text-3xl font-bold mb-7">{destination.name}</h1>
            <div className="relative mb-10">
              <div className="absolute top-0 z-10 w-full">
                <Badge>Trending Destination</Badge>
              </div>
              <Slider {...settings}>
                {destination.images &&
                  destination.images.map((image, index) => (
                    <div key={index}>
                      <img
                        src={`/storage/${image}`}
                        alt={destination.name}
                        className="w-full h-96 object-cover hover:scale-110 cursor-pointer"
                      />
                    </div>
                  ))}
              </Slider>
            </div>
            <div className="mb-7">
              <h3 className="text-xl font-medium mb-3">Deskripsi</h3>
              <p className="whitespace-pre-line">{destination.description}</p>
            </div>
            <div className="mb-7 flex flex-col gap-3">
              <h3 className="text-xl font-medium">Detail</h3>
              <div>
                <h4 className="font-medium">Lokasi</h4>
                <p>{destination.address}</p>
              </div>
              <div>
                <h4 className="font-medium">Tiket Masuk</h4>
                <p>{formatRupiah(destination.entrance_fee)}</p>
              </div>
            </div>
          </div>
        </div>
      </GuestLayout>
    </>
  )
}
