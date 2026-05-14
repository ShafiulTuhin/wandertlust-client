import React from "react";
import DestinationCard from "../DestinationCard";
import Link from "next/link";
import { Button } from "@heroui/react";

const Featured = async () => {
  const res = await fetch("https://wanderlust-server.vercel.app/featured");
  const featureDest = await res.json();
  return (
    <div className="container mx-auto py-15">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold ">Featured Destinations</h2>
        <Link href={"/destination"}>
          <Button
            variant="outline"
            className=" rounded-lg border-2 border-cyan-500 font-bold"
          >
            All Destinations
          </Button>
        </Link>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-5">
        {" "}
        {featureDest.map((dest) => (
          <DestinationCard key={dest._id} destination={dest} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
