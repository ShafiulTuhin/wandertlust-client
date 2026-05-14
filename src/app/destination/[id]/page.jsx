import BookingCard from "@/components/BookingCard";
import DeleteDialog from "@/components/DeleteDialog";
import { EditModal } from "@/components/EditModal";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaEdit } from "react-icons/fa";
import { ImPriceTag } from "react-icons/im";

export const metadata = {
  title: "Wanderlust",
  description: "Book your favorite place to tour",
};

const DestinationDetailPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    `https://wanderlust-server.vercel.app/destination/${id}`,
    {
      cache: "no-store",
    },
  );

  const destination = await res.json();

  const {
    _id,
    destinationName,
    country,
    departureDate,
    description,
    category,
    price,
    imageUrl,
  } = destination;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex justify-end gap-4 mb-5">
        <EditModal destination={destination} />
        <DeleteDialog destination={destination} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Image Section */}

        <div className="relative w-full h-[520px] overflow-hidden rounded-3xl shadow-lg">
          <Image
            src={imageUrl}
            alt={destinationName}
            fill
            className="object-cover"
          />
        </div>

        {/* Details Section */}
        <div className="space-y-4">
          <h2 className="font-bold mb-5 flex gap-3 items-center">
            Category:
            <span className="bg-[#15A1BF] py-2 px-4 rounded-lg text-white ">
              {category}
            </span>
          </h2>

          <h1 className="text-4xl md:text-5xl font-bold text-[#15A1BF] mb-6">
            {destinationName}
          </h1>

          <div className="space-y-5 mb-8">
            <div className="flex items-center gap-3 text-lg">
              <FaMapMarkerAlt className="text-[#15A1BF] text-xl" />

              <span className="font-semibold">Country:</span>

              <span className="text-gray-600">{country}</span>
            </div>

            <div className="flex items-center gap-3 text-lg">
              <FaCalendarAlt className="text-[#15A1BF] text-xl" />

              <span className="font-semibold">Departure:</span>

              <span className="text-gray-600">{departureDate}</span>
            </div>

            <div className="flex items-center gap-3 text-lg">
              <ImPriceTag className="text-[#15A1BF] text-xl" />

              <span className="font-semibold">Price:</span>

              <span className="text-2xl font-bold text-[#15A1BF]">
                ${price} $
              </span>
            </div>
          </div>

          <div className="mb-5">
            <h2 className="text-2xl font-bold text-[#15A1BF] mb-4">
              About Tour
            </h2>

            <p className="text-gray-600 leading-8 text-justify">
              {description}
            </p>
          </div>

          <BookingCard destination={destination} />
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailPage;
