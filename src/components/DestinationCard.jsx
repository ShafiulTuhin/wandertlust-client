import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaMap } from "react-icons/fa";
import { ImPriceTag } from "react-icons/im";

const DestinationCard = ({ destination }) => {
  const { _id, destinationName, country, category, price, imageUrl } =
    destination;
  return (
    <div className="p-2 shadow-sm">
      <div className="relative w-full aspect-[4/3]">
        <Image
          src={imageUrl}
          alt={destinationName}
          fill
          sizes="
      (max-width: 640px) 100vw,
      (max-width: 1024px) 50vw,
      25vw
    "
          className="rounded-xl object-cover"
        />
        <Chip className="absolute top-2 right-2 bg-[#15A1BF] text-white">
          {category}
        </Chip>
      </div>
      <h2 className="text-[#15A1BF] font-bold text-2xl my-3 flex gap-2 items-center">
        <FaMap />
        {destinationName}
      </h2>
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-[#15A1BF]">Country: {country}</h2>
        <h2 className="font-bold text-[#15A1BF] flex gap-2 items-center">
          <ImPriceTag /> {price} $
        </h2>
      </div>
      <Link href={`/destination/${_id}`}>
        {" "}
        <Button className="w-full mt-5">Details</Button>
      </Link>
    </div>
  );
};

export default DestinationCard;
