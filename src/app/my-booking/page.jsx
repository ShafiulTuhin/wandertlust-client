import BookingCancelAlert from "@/components/BookingCancelAlert";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";

const MyBookingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  const user = session?.user;
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(
    `https://wanderlust-server.vercel.app/booking/${user.id}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
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
          className="md:flex justify-between border p-5 mb-5 rounded-lg"
        >
          <div className="flex gap-5 items-center md:mb-0 mb-4">
            <div className="w-[200px] h-[200px] relative">
              <Image
                src={booking.destinationImage}
                alt={booking.destinationName}
                fill
                className="object-cover rounded-md"
              />
            </div>
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

              <p className="text-3xl font-bold text-cyan-500">
                ${booking.price}
              </p>
            </div>
          </div>
          <BookingCancelAlert booking={booking} />
        </div>
      ))}
    </div>
  );
};

export default MyBookingPage;
