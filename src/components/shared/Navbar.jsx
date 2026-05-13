"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import LogoImg from "@/assets/Wanderlast.png";
import NavLink from "./NavLink";

import { useRouter } from "next/navigation";
import { CiUser } from "react-icons/ci";

const Navbar = () => {
  // const { data, isPending } = authClient.useSession();

  // const user = data?.user;

  const [isOpen, setIsOpen] = useState(false);
  const border = "border-1 border-[#15A1BF] rounded-lg";

  const router = useRouter();
  //   const handleLogout = async () => {
  //     try {
  //       await authClient.signOut({
  //         fetchOptions: {
  //           onSuccess: () => {
  //             router.push("/");
  //             toast.success("Logged out successfully", {
  //               position: "top-center",
  //               autoClose: 5000,
  //             });
  //           },
  //         },
  //       });
  //     } catch (error) {
  //       toast.error("Logout failed");
  //     }
  //   };

  return (
    <div className="py-5">
      <div className="flex justify-between items-center  px-4 ">
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center font-bold text-[#797979]">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/destination">Destinations</NavLink>
          </li>
          <li>
            <NavLink href="/my-booking">My Bookings</NavLink>
          </li>
          <li>
            <NavLink href="/admin">Admin</NavLink>
          </li>
        </ul>
        <Link href={"/"}>
          <Image src={LogoImg} alt="Logo" width={120} height={120} />
        </Link>

        {/* {isPending ? (
          <span className="flex justify-center items-center">Loading...</span>
        ) : user ? (
          <div className="hidden md:flex items-center gap-4">
            <div className="text-right">
              <p className="text-green-600 font-semibold text-sm">Welcome!</p>
              <p className="font-bold text-sm">{user?.name}</p>
            </div>
            <Image src={user?.image} alt={user?.name} width={40} height={40} />

            <button
              onClick={handleLogout}
              className="bg-[#f59e0b] text-[#081f30] font-bold hover:opacity-90 transition rounded-lg cursor-pointer px-4 py-2"
            >
              Logout
            </button>
          </div>
        ) : ( */}
        <div className="hidden md:flex items-center text-[#797979]">
          <div className="flex gap-2 items-center">
            <CiUser size={24} />
            <Link href="/profile" className="font-bold">
              Profile
            </Link>
          </div>

          <Link href="/login">
            <button className="font-bold hover:opacity-90 transition rounded-lg cursor-pointer px-4 py-2">
              Login
            </button>
          </Link>
          <Link href="/register">
            <button className="font-bold hover:opacity-90 transition rounded-lg cursor-pointer px-4 py-2">
              Sign up
            </button>
          </Link>

          {/* <button
            // onClick={handleGoogleLogin}
            className="border border-[#f59e0b] cursor-pointer rounded-lg p-2"
          >
            <Image
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              width={20}
              height={20}
              title="Login with google"
            />
          </button> */}
        </div>
        {/* )} */}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden px-4 pb-4 space-y-4 transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-3 font-bold text-[#797979] bg-white shadow-lg p-4 rounded-lg">
          <li className={`${border}`}>
            <NavLink href="/">Home</NavLink>
          </li>

          <li className={`${border}`}>
            <NavLink href="/destination">Destinations</NavLink>
          </li>
          <li className={`${border}`}>
            <NavLink href="/my-bookings">My Bookings</NavLink>
          </li>
          <li className={`${border}`}>
            <NavLink href="/admin">Admin</NavLink>
          </li>
        </ul>

        <div className="">
          {/* {isPending ? (
            <span className="flex justify-center items-center">Loading...</span>
          ) : user ? (
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="md:text-start text-center">
                  <p className="text-green-600 font-semibold">Welcome!</p>
                  <p className="font-bold">{user?.name}</p>
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="btn bg-[#f59e0b] text-[#081f30] hover:opacity-90 transition font-bold cursor-pointer py-2  rounded-lg w-full"
              >
                Logout
              </button>
            </div>
          ) : ( */}
          <div className="flex gap-3 items-center justify-between text-[#797979]">
            <div className="flex gap-2 items-center border border-[#15A1BF] p-2 rounded-lg">
              <CiUser size={18} />
              <Link href="/profile" className="font-bold">
                Profile
              </Link>
            </div>
            <Link href="/login">
              <button className="font-bold  cursor-pointer  py-2 px-4 border border-[#15A1BF] p-2 rounded-lg">
                Login
              </button>
            </Link>
            <Link href="/register">
              <button className="font-bold cursor-pointer py-2 border border-[#15A1BF] p-2 rounded-lg">
                Sign up
              </button>
            </Link>
            {/* <button
                onClick={handleGoogleLogin}
              className="flex gap-2 border items-center justify-center border-[#f59e0b] py-2 w-full  text-[#081f30] font-bold rounded-lg mx-auto "
            >
              <Image
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                // className="w-5 h-5"
                width={20}
                height={20}
              />
              Continue with google
            </button> */}
          </div>
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
