import React from 'react'
import { Link, Head } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Badge from '@/Components/Badge';
import formatRupiah from '@/utlis/formatRupiah';

export default function DestinationDetail() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  const dummyDescription = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint deserunt, odio neque, omnis placeat maxime in iure expedita debitis officia ex laborum aperiam, deleniti vitae. At rem, facilis quia amet odio et, dolor consectetur blanditiis doloribus aut, magni dolore nulla quod maxime. Aspernatur, quae quasi esse unde obcaecati magni magnam nisi delectus nam temporibus quia officiis dolor ratione laborum at quisquam dolorem quo tempore omnis quod! Exercitationem corporis voluptate similique impedit eos vel saepe aspernatur rerum eius mollitia cum maxime inventore ab, iste eum, alias, amet voluptates nisi iusto ea itaque numquam. Consectetur obcaecati, quibusdam sed corrupti cupiditate quam nisi?
  \nThis is dummy description, bro. 
  `

  let isBookmarked = false

  return (
    <>
      <Head title="Destination Detail" />
      <GuestLayout>
        <div className="main-container min-h-screen pt-16 pb-32">
          <div className="relative w-full p-8 bg-white rounded-xl shadow-lg">
            <button
              className="absolute top-8 right-8"
              on
            >
              <i className="fa fa-trash" />
            </button>
            <h1 className="text-3xl font-bold mb-7">Destination Name</h1>
            <div className="relative mb-10">
              <div className="absolute top-0 z-10 w-full">
                <Badge>Trending Destination</Badge>
              </div>
              <Slider {...settings}>
                <div>
                  <img
                    src="https://a.travel-assets.com/findyours-php/viewfinder/images/res40/481000/481689-Ocean-View-Norfolk.jpg"
                    alt="Pemandangan"
                    className="w-full h-80 object-cover hover:scale-110 cursor-pointer"
                  />
                </div>
                <div>
                  <img
                    src="https://thumbs.dreamstime.com/b/beautiful-view-nature-mountains-near-konigssee-lake-bavaria-germany-blue-sky-clouds-97444419.jpg"
                    alt="Pemandangan"
                    className="w-full h-80 object-cover hover:scale-110 cursor-pointer"
                  />
                </div>
              </Slider>
            </div>
            <div className="mb-7">
              <h3 className="text-xl font-medium mb-3">Deskripsi</h3>
              <p className="whitespace-pre-line">{dummyDescription}</p>
            </div>
            <div className="mb-7 flex flex-col gap-3">
              <h3 className="text-xl font-medium">Detail</h3>
              <div>
                <h4 className="font-medium">Lokasi</h4>
                <p>Jl. Raya Puputan No.86, Dangin Puri Klod, Kec. Denpasar Tim., Kota Denpasar, Bali 80234</p>
              </div>
              <div>
                <h4 className="font-medium">Tiket Masuk</h4>
                <p>{formatRupiah(10000)}</p>
              </div>
            </div>
          </div>
        </div>
      </GuestLayout>
    </>
  )
}
