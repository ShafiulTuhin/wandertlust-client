import DestinationCard from "@/components/DestinationCard";
import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Wanderlust | Destinations",
  description: "Find your choice,get refreshment",
};

const DestinationPage = async () => {
  const res = await fetch("https://wanderlust-server.vercel.app/destination");
  const destinations = await res.json();
  // console.log(destinations);

  return (
    <div className="container mx-auto py-20">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-3xl text-[#797979]">
          Explore Destinations:{" "}
        </h2>
        <Link href={"/destination/add-destination"}>
          <Button className="btn bg-[15A1BF]">Add Destination</Button>
        </Link>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mt-5">
        {destinations.map((dest) => (
          <DestinationCard key={dest._id} destination={dest} />
        ))}
      </div>
    </div>
  );
};

export default DestinationPage;
