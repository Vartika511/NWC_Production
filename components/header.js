import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import nwc from "../public/nwc.png";
export default function Header(props) {
  const [showSidebar, setShowSidebar] = useState(false);
  const {textColor} = props;

  return (
    <div className="font-bold navbar flex justify-between lg:justify-evenly lg:items-center">
      <div className="logo pt-5 pb-1">
        <button>
          <Link href="/" >
            <Image alt="nwc" src={nwc} width={95} height={90} />

          </Link>

        </button>

      </div>
      {/* showing hamburger menu for mobiles and tabets */}
      <div className="hamburger  mr-5 flex items-center lg:hidden">
        <>
          {showSidebar ? (
            <button
              className={`flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50`}
              onClick={() => setShowSidebar(!showSidebar)}
            >
              x
            </button>
          ) : (
            <svg
              onClick={() => setShowSidebar(!showSidebar)}
              className="z-30 flex items-center cursor-pointer right-10 top-6"
              fill={textColor}
              viewBox="0 0 100 80"
              width="40"
              height="40"
            >
              <rect width="100" height="10"></rect>
              <rect y="30" width="100" height="10"></rect>
              <rect y="60" width="100" height="10"></rect>
            </svg>
          )}

          <div
            className={` top-0 right-0 w-full bg-black  p-10  text-white fixed h-full z-40  ease-in-out duration-300 ${showSidebar ? "translate-x-0 " : "translate-x-full"
              }`}
          >
            <div className="w-max mx-auto mt-10 h-96 flex flex-col items-start justify-around text-xl sm:text-4xl ">
              <Link href="/">
                <button>
                  <h3>Home</h3>
                </button>
              </Link>
              <Link href="/aboutus">
                <button>
                  <h3>About Us</h3>
                </button>
              </Link>
              <Link href="/events">
                <button>
                  <h3 className="">Events</h3>
                </button>
              </Link>
              <Link href="/contactus">
                <button>
                  <h3>Contact Us</h3>
                </button>
              </Link>
            </div>
          </div>
        </>
      </div>
      <div className={`hidden w-full  lg:flex  text-${textColor} text-3xl lg:justify-evenly lg:items-center`}>
        <a href="/" className="hover:underline-offset-4">
          <button className="">
            <h3 className="hover:underline hover:text-[#00c3ff]">Home</h3>
          </button>
        </a>
        <Link href="/aboutus" >
          <button>
            <h3 className="hover:underline hover:text-[#00c3ff]">About Us</h3>
          </button>
        </Link>
        <Link href="/events">
          <button>
            <h3 className="hover:underline hover:text-[#00c3ff]">Events</h3>
          </button>
        </Link>
        <Link href="/contactus">
          <button>
            <h3 className="hover:underline hover:text-[#00c3ff]">Contact Us</h3>
          </button>
        </Link>
      </div>
    </div>
  );
}
