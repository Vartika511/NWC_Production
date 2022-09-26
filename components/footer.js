import React from "react";
import Image from "next/image";
import Link from "next/link";
import footer from "../public/footer.png"
import instagram from "../public/instagram.png"



export default function Footer() {
   
  return (
    <div className={`footer w-full hidden bg-black text-white  flex-col lg:block `}>
        <div className="flex justify-around items-center">

        <div className="text-xl h-fit">
            <h1>Contact Us</h1>
            <h4>Email : nwcassociation@gmail.com</h4>
        </div>
        <div className="text-xl h-fit flex flex-col items-start">
            <h1>Useful Links</h1>
            <Link href="/">
            <button>Home</button>
            </Link>
            <Link href="/aboutus" >
            <button>About Us</button>
            </Link>
            <Link href="/events" >
            <button>Events</button>
            </Link>
            <Link href="/contactus" >
            <button>Contact Us</button>
            </Link>
        </div>
        <div className="text-xl h-fit">
            <h1>Follow us</h1>
            <div className="flex justify-evenly">
           <button>
           <Link href="https://www.instagram.com/nwcsrmist/">
               <Image alt="instagram" src={instagram} height="32" width="32" />
           </Link>
           </button>
           
            
            </div>
        </div>
        <div className=" flex items-end text-xl">
            <div >
            <Image alt="footer" src={footer} width="156" height = "190" />
            </div>
            
        </div>
     
        </div>
            <div className="border w-full h-1.5 rounded-xl bg-white">

            </div>
        <div className="text-center">
        © Copyright NWC Association SRM. All Rights Reserved
            </div>
    </div>
  );
}
