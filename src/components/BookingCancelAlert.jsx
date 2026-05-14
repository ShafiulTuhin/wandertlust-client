"use client";
import { AlertDialog, Button } from "@heroui/react";
import React from "react";
import { FaTrash } from "react-icons/fa";

const BookingCancelAlert = ({ booking }) => {
  const { _id, destinationName } = booking;
  console.log(_id);

  const handleCancelBooking = async () => {
    const res = await fetch(
      `https://wanderlust-server.vercel.app/booking/${_id}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      },
    );

    await res.json();
    window.location.reload();
  };
  return (
    <div>
      <AlertDialog>
        <Button variant="danger" className="rounded-lg md:w-[150px] w-full">
          <FaTrash /> Cancel
        </Button>
        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-[400px]">
              <AlertDialog.CloseTrigger />
              <AlertDialog.Header>
                <AlertDialog.Icon status="danger" />
                <AlertDialog.Heading>
                  Cancel trip permanently?
                </AlertDialog.Heading>
              </AlertDialog.Header>
              <AlertDialog.Body>
                <p>
                  This will permanently delete
                  <strong> {destinationName}</strong> from your booking list.
                  This action cannot be undone.
                </p>
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button slot="close" variant="tertiary">
                  Cancel
                </Button>
                <Button
                  onClick={handleCancelBooking}
                  slot="close"
                  variant="danger"
                >
                  Cancel Trip
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </div>
  );
};

export default BookingCancelAlert;
