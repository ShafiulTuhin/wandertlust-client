import { EditModal } from "@/components/EditModal";
import React from "react";

const EditPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://127.0.0.1:5000/destination`);

  const destinations = await res.json();
  const destination = destinations.find((dest) => dest._id == id);
  return (
    <div>
      <EditModal destination={destination} />
    </div>
  );
};

export default EditPage;
