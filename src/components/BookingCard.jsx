"use client";
import { authClient } from "@/lib/auth-client";
import { Button, DateField, Label } from "@heroui/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const BookingCard = ({ destination }) => {
  const [departureDate, setDepartureDate] = useState(null);

  const { data } = authClient.useSession();
  const user = data?.user;

  const router = useRouter();

  const handleBooking = async () => {
    // Check login first
    if (!user) {
      toast.error("Please login first");
      router.push("/login");
      return;
    }

    // Check date
    if (!departureDate) {
      toast.error("Please select a departure date");
      return;
    }
    const myBookings = {
      userId: user?.id,
      userImage: user?.image,
      userName: user?.name,
      destinationId: destination._id,
      destinationName: destination.destinationName,
      price: destination.price,
      country: destination.country,
      destinationImage: destination.imageUrl,
      departureDate: new Date(departureDate),
    };
    const res = await fetch("https://wanderlust-server.vercel.app/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(myBookings),
    });

    const bookingData = await res.json();
    if (bookingData) {
      toast.success(
        `Congratulations! ${myBookings.destinationName} booked successfully`,
      );
      router.push("/my-booking");
    }
  };

  return (
    <div className="flex gap-10 items-center">
      <DateField
        onChange={setDepartureDate}
        className="w-[256px]"
        name="date"
        isRequired
      >
        <Label>Departure Date</Label>
        <DateField.Group>
          <DateField.Input>
            {(segment) => <DateField.Segment segment={segment} />}
          </DateField.Input>
        </DateField.Group>
      </DateField>
      <Button
        onClick={handleBooking}
        className="bg-[#15A1BF] text-white px-10 font-semibold rounded-lg"
      >
        Book Now
      </Button>
    </div>
  );
};

export default BookingCard;
