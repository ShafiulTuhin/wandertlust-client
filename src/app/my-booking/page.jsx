import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";

const MyBookingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

  const user = session?.user;

  const res = await fetch(
    `https://wanderlust-server.vercel.app/booking/${user.id}`,
  );
  const bookings = await res.json();

  return (
    <div className="container mx-auto py-20">
      <h2 className="text-3xl font-bold mb-5">
        My Bookings: {bookings.length}
      </h2>
      {bookings.map((booking) => (
        <div
          key={booking._id}
          className="flex gap-5 border p-5 space-y-5 rounded-lg"
        >
          <Image
            src={booking.destinationImage}
            alt={booking.destinationName}
            height={200}
            width={200}
          />
          <div>
            <h1 className="font-bold text-2xl">{booking.destinationName}</h1>
            <p>
              {new Date(booking.departureDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>

            <p>Booking Id: {booking._id}</p>

            <p className="text-3xl font-bold text-cyan-500">${booking.price}</p>

            {/* <BookingCancelAlert bookingId={booking._id} /> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyBookingPage;
