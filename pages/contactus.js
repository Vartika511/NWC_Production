import Head from "next/head";
import Image from "next/image";
import {useRef } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import emailjs from "@emailjs/browser";
import contactPage from "../public/contactpage.png"




export default function ContactUs() {
  const form = useRef();
  const sendMail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "contact_service",
        "contact_form",
        form.current,
        `${process.env.NEXT_PUBLIC_EMAILJS_KEY}`
      )
      .then(
        (result) => {
          console.log(result.text);
          event.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="bg-white flex flex-col w-max h-full md:w-full   text-black ">
      <Head>
        <title >Contact Us/NWC</title>
        <meta name="description" content="Contact us " />
        <link rel="icon" href="/nwc.png" />
      </Head>
      <Header textColor={"black"}/>
      <div className="mb-5 flex flex-col items-center  h-fit  md:w-screen mx-auto">
      <div>
        <h1 className="flex justify-center font-extrabold text-xl sm:text-7xl lg:text-5xl mb-10">  Contact Us</h1>
        </div>
        <div className="form mx-auto   h-fit  xs:h-screen  w-screen flex flex-col lg:flex-row lg:justify-center">
          <div className="border-4 bg-gradient-to-r from-[#414345] to-[#232526] lg:border-y-4 lg:border-r-0 border-black  rounded-3xl lg:rounded-r-none  form-left ">
            <h2 className="text-white ml-10 mt-4 font-bold text-3xl sm:text-5xl mb-7 lg:text-2xl">
              Contact Information
            </h2>
            <p className="text-white  mx-auto font-medium text-xs  sm:text-xl md:p-7 h-fit mb-7">
              Fill this form and our team will get back to you within 24 hours
            </p>
            <div className="text-white ml-10 flex mb-5">
              <Image alt="phone" src="/PhoneOutline.png" height="32" width="32" />
              <p className="ml-4">+23456-54876</p>
            </div>
            <div className="text-white ml-10 flex ">
              <Image alt="mail" src="/MailOutline.png" height="32" width="32" />
              <p className="ml-4">nwc.srmist@gmail.com</p>
            </div>
            <div className="ml-10 flex  sm:w-fit  lg:justify-right mb-0">
              <div className="lg:hidden">
                <Image
                  alt="contactpage"
                  src={contactPage}
                  width="250"
                  height="200"
                />
              </div>
              <div className="hidden lg:block">
                <Image
                  alt="contactpage"
                  src={contactPage}
                  width="302"
                  height="193"
                />
              </div>
            </div>
          </div>
          <div className="text-white border-4 lg:border-y-4 lg:border-r-4 lg:border-l-0 border-black  rounded-3xl lg:rounded-l-none  bg-gradient-to-r from-[#414345] to-[#232526] form-right flex flex-col justify-center">
            <form ref={form} onSubmit={sendMail} className="flex flex-col items-center">
              <div className="ml-5 mr-5 text-white flex flex-col mb-5">
                <label htmlFor="user_name">Full Name</label>
                <input
                  type="text"
                  name="user_name"
                  className="rounded-md w-80 text-black "
                  required
                ></input>
              </div>
              <div className="ml-5 mr-5 flex flex-col mb-5">
                <label htmlFor="user_email">Email</label>
                <input
                  type="text"
                  name="user_email"
                  className="rounded-md w-80 text-black"
                  required
                ></input>
              </div>
              <div className="ml-5 mr-5 flex flex-col mb-5">
                <label htmlFor="message">Message</label>
                <textarea
                  type="text"
                  name="message"
                  className="rounded-md w-80 text-black"
                  required
                />
              </div>
              <div className=" text-white flex flex-col mb-10">
              <div class="grid gap-8 items-start justify-center mt-10 xl:mt-0">
    <div class="relative group">
      <div class="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <button class="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600"> Submit  </button>
    </div>
              </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
