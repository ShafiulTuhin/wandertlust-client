import DeleteDialog from "@/components/DeleteDialog";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaEdit } from "react-icons/fa";
import { ImPriceTag } from "react-icons/im";

const DestinationDetailPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://127.0.0.1:5000/destination/${id}`, {
    cache: "no-store",
  });

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
      <div className="flex justify-end mb-5">
        <Link href={`/destination/${_id}/edit`} className="mr-3">
          <Button className="bg-[#15A1BF] flex gap-2 items-center rounded-lg">
            <FaEdit />
            Edit
          </Button>
        </Link>
        <DeleteDialog destination={destination} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div>
          <Image
            src={imageUrl}
            alt={destinationName}
            width={700}
            height={500}
            priority
            className="w-full  object-cover rounded-3xl shadow-lg"
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
                ${price}
              </span>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold text-[#15A1BF] mb-4">
              About Tour
            </h2>

            <p className="text-gray-600 leading-8 text-justify">
              {description}
            </p>
          </div>

          <Button className="bg-[#15A1BF] text-white px-10 font-semibold mt-5 rounded-lg">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailPage;
