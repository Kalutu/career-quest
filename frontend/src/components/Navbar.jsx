import React, { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose, AiOutlineLogout } from "react-icons/ai";
import { CustomButton } from "./";
import { users } from "../utils/data";

const MenuList = ({ user }) => {
  const handleLogout = () => {};

  return (
    <div>
      <Menu as="div" className="inline-block text-left">
        <div className="flex">
          <Menu.Button className="inline-flex gap-2 w-full rounded-md bg-white md:px-4 py-2 text-sm font-medium text-slate-700 hover:bg-opacity-20">
            <div className="leading[80px] flex flex-col items-start">
              <p className="text-sm font-semibold">
                {user?.firstName ?? user?.name}
              </p>
              <span className="text-sm text-blue-600">
                {user?.jobTitle ?? user?.email}
              </span>
            </div>

            <img
              src={user?.profileUrl}
              alt="user profile"
              className="w-10 h-10 rounded-full object-cover"
            />
            <BiChevronDown
              className="h-8 w-8 text-slate-600"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute z-50 right-2 mt-2 w-56 origin-top-right divide-y dividfe-gray-100 rounded-md bg-white shadow-lg focus:outline-none "></Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

const Navbar = () => {
  const user = users[1];
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseNavbar = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <div className="relative bg-[#f7fdfd] z-50">
        <nav className="container mx-auto flex items-center justify-between p-5">
          <div>
            <Link to="/" className="text-blue-600 font-bold text-xl">
              Carrer<span className="text-[#1677cccb]"> Quest</span>
            </Link>
          </div>
          <ul className="hidden lg:flex gap-10 text-base">
            <li>
              <Link to="/">Find Job</Link>
            </li>
            <li>
              <Link to="/companies">Companies</Link>
            </li>
            <li>
              <Link to="/upload-job">Upload Job</Link>
            </li>
            <li>
              <Link to="/about-us">About</Link>
            </li>
          </ul>

          <div className=" lg:block">
            {!user?.token ? (
              <Link to="/user-auth">
                <CustomButton
                  title="Sign In"
                  containerStyles="text-blue-600 py-1.5 px-5 focus:outline-none hover:bg-blue-700 hover:text-white rounded-full text-base border boredr-blue-600"
                />
              </Link>
            ) : (
              <div>
                <MenuList user={user} />
              </div>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
