// components/Navbar.js

import Link from "next/link";
import { useEffect, useState } from "react";

import { Popover, Transition } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import { Menu, X } from "react-feather";
import Button from "../Button";

const PartialNavbarElements = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Health professionals",
    href: "/health-professionals",
  },
  {
    name: "Medicinal Library",
    href: "/library",
  },
];

function RevealForMobile() {
  return (
    <div className="w-full max-w-sm">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "" : "text-opacity-90"}
                 inline-flex items-center rounded-md  text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span className="text-l">☰</span>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform sm:px-0">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                    {PartialNavbarElements.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-green-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900">
                            {item.name}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(false);

  const toggleMenu = () => {
    setVisible(!visible);
  };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollPos = window.pageYOffset;

  //     // When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar
  //     setVisible(currentScrollPos < 80 || prevScrollPos > currentScrollPos);
  //     setPrevScrollPos(currentScrollPos);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [prevScrollPos]);

  // <nav
  //   className={`fixed left-0 right-0 top-0 z-[100] ${
  //     visible ? "mx-0 my-0 rounded-[0] pt-10" : "mx-2 my-5 rounded-[50px]"
  //   }  min-h-[56px] bg-primaryGreen p-5 transition-all duration-300`}
  // >

  return (
    <nav className="duration-800 fixed left-0 right-0 top-0 z-[100] mx-2 my-5 min-h-[56px] items-center rounded-[40px] bg-primaryGreen p-3.5 transition-all">
      <div className="flex items-center justify-between text-offWhite">
        <div className="flex flex-row">
          <div className="ml-8">Eden Logo</div>
          <div className="ml-7 mr-8 hidden flex-row gap-5 text-base font-semibold leading-normal text-offWhite md:flex">
            <div>
              <Link href="/about">About</Link>
            </div>
            <div>
              <Link href="/Health">Health professionals</Link>
            </div>
            <div>
              <Link href="/library">Library</Link>
            </div>
          </div>
        </div>
        <div className=" hidden flex-row items-center gap-3.5 text-base font-semibold leading-normal  text-offWhite md:flex">
          <Button type="primary" className="border border-offWhite">
            <Link href="/login">Login</Link>
          </Button>
          <Button type="secondary" className="font-bold text-primaryGreen">
            <Link href="quiz">Take a Quiz</Link>
          </Button>
        </div>
        <div
          className="justify-right duration-1200 z-30 mx-4 flex transition-transform ease-in-out md:hidden"
          onClick={toggleMenu}
        >
          {visible ? <X /> : <Menu className="" />}
        </div>
      </div>
      {/* <div
        className={`${
          visible ? "flex" : "hidden"
        } duration-800 z-30 transition-transform ease-in-out`}
      > */}
      <div
        className={`${
          visible ? "flex" : "hidden"
        } duration-1200 z-30 transition-transform ease-in-out`}
      >
        <div className="ml-8 flex w-full flex-col justify-start gap-8 pt-8 text-offWhite">
          <div>
            <Link href="/about">About</Link>
          </div>
          <div>
            <Link href="/Health">Health professionals</Link>
          </div>
          <div>
            <Link href="/library">Library</Link>
          </div>
          <div className="mb-4 mr-2 flex flex-row justify-between">
            <div className="gap-2">
              <Button
                type="primary"
                className="w-[8rem] border border-offWhite"
              >
                <Link href="/login">Login</Link>
              </Button>
            </div>
            <div>
              <Button
                type="secondary"
                className="w-[9rem] bg-offWhite font-bold text-primaryGreen"
              >
                <Link href="quiz">Take a Quiz</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
