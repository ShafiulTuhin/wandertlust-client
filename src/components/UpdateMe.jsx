"use client";
import React from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";

const UpdateMe = () => {
  const { data } = authClient.useSession();
  const user = data?.user;

  const [name, setName] = React.useState("");
  const [image, setImage] = React.useState("");

  const router = useRouter();

  React.useEffect(() => {
    if (user) {
      setName(user.name || "");
      setImage(user.image || "");
    }
  }, [user]);

  const updateUser = async () => {
    const { data: res, error } = await authClient.updateUser({
      name,
      image,
    });

    if (error) {
      return;
    }

    if (res) {
      router.push("/profile");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-xl shadow space-y-5">
      <h2 className="text-2xl font-bold text-center">Update Profile</h2>

      {/* Name */}
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input input-bordered w-full bg-slate-100"
        placeholder="Name"
      />

      {/* Image */}
      <input
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="input input-bordered w-full bg-slate-100"
        placeholder="Image URL"
      />

      {/* Save Button */}
      <div className="flex gap-3 pt-3">
        {/* Cancel */}
        <Link href="/my-profile" className="flex-1">
          <button className="w-full btn bg-gray-200 py-2 rounded-lg cursor-pointer">
            Cancel
          </button>
        </Link>

        {/* Save */}
        <button
          onClick={updateUser}
          className="flex-1 btn bg-cyan-500 text-[#081f30] py-2 rounded-lg cursor-pointer"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default UpdateMe;
