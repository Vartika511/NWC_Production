import Head from "next/head";
import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";


import MemberCard from "../components/membercard";
import amrit from "../public/amrit.png";
import arvindg from "../public/arvindg.png";
import safamaam from "../public/safamaam.jpeg";
import supraja from "../public/supraja.jpg";
import sam from "../public/sam.jpg"
import vision from "../public/vision.png"
import mission from "../public/mission.png"


export default function Aboutus() {
  return (
    <div className="bg-gradient-to-r from-[#C9D6FF] to-[#E2E2E2] h-fit w-fit lg:h-fit ">
      <Head>
        <title>About NWC</title>
        <meta name="description" content="About NWC Club " />
        <link rel="icon" href="/nwc.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap" rel="stylesheet" />
      </Head>
      <Header textColor={"black"} />
      <div className=" flex flex-col  justify-evenly items-center w-full h-fit sm:h-screen lg:h-full   overflow-y-hidden ">
        <div className="aboutus flex flex-col items-center lg:w-full px-10 text-black">
          <h1 className="Satisfy text-6xl w-fit text-left pb-10 font-extrabold bg-gradient-to-r text-transparent bg-clip-text from-[#FF0066] to-[#6600FF] ">
            About Us</h1>
          <p className="Satisfy text-center text-base md:text-2xl font-medium  ">
            NWC is a student association formed exclusively for the
            Specializations in Information Technology,Internet of Things,Computer Networking, Cybersecurity, and Cloud Computing
            of the Computer Science Engineering branch under the umbrella of ‘School of Computing ’.
          </p>

        </div>

        {/* vision and mission cards */}
        <div className="visionMission flex flex-wrap justify-evenly   w-full md:h-fit ">
          <div className=" vision my-10 mx-auto md:mx-0 md:my-0 md:mb-5 lg:my-8 border-2 border-black rounded-xl  flex  justify-center items-center  h-80 w-96 lg:w-140  ">

            <div className="ml-4 mr-4 vision-image flex items-center ">
              <Image src={vision} width="200" height="200" />
            </div>
            <div className="vision-desc  mr-4 w-48">
              <h2 className="text-2xl font-semibold">VISION</h2>
              <p className="text-left font-light">
                The vision of NWC is to cultivate morally upright pupils using a variety of teaching methods to show off their overall development. The department,headed by Ms. Safa, president and its faculty members are academically and industrially solid.
              </p>
            </div>
          </div>
          <div className="vision my-10 mx-auto md:mx-0 md:my-0 md:mb-5 lg:my-8 border-2 border-black rounded-xl  flex  justify-center items-center  h-80 w-96 lg:w-140  ">

            <div className="ml-4 mr-4 vision-image flex items-center ">
              <Image src={mission} width="200" height="200" />
            </div>
            <div className="vision-desc  mr-4 w-48">
              <h2 className="text-2xl font-semibold">MISSION</h2>
              <p className="text-left font-light">
                The department's research focuses on creating fresh, original concepts that show students' eagerness to succeed in life.The organisation focuses on giving insights into the potential for future development using technical approaches.
              </p>
            </div>
          </div>
          {/* <div className="mission my-10 mx-auto md:mx-0 md:mb-5  border-2 lg:my-8 border-black rounded-xl  flex  justify-center items-center  h-80 w-96 lg:w-140  ">
             <div className="ml-4 mr-4 mission-image flex items-center ">
              <Image src={mission} width="200" height="200" />
              </div>
              <div className="vision-desc mr-4  w-48">
              <h2 className="mt-10 text-2xl font-semibold">VISION</h2>
                  <p className="text-left font-light ">
                   Magna eu mollit voluptate Magna  nulla reprehenderit nulla reprehenderit nostrud. Minim voluptate eu est duis excepteur occaecat nisi esse fugiat. Ipsum sunt aliqua voluptate do veniam dolore culpa in nulla tempor ad.
                  </p>
              </div>
          </div> */}

        </div>


      </div>
      <div className="faculty-members bg-black border-8 border-black  h-fit w-fit sm:w-full ">

        <h1 className="font-bold mt-4 underline  mb-20 text-center text-6xl bg-gradient-to-r text-transparent bg-clip-text from-[#3494E6] to-[#EC6EAD]" >
          Our Team
        </h1>
        <h1 className="font-bold mb-20 text-left text-white pl-20 text-3xl">
          Faculty Members
        </h1>
        <div className="flex flex-col justify-around ">
          {/* Faculty members */}
          <div className="mt-10 md:my-10    w-full flex justify-around flex-wrap">

            <div className="member mb-10 lg:mb-0">
              <MemberCard
                src={safamaam}
                name={"Ms. M. Safa"}
                designation={"President"}
                desc={"Assistant Professor NWC SRM IST"}
                knowmore={"Know more"}
                knowmoreSrc={"https://www.linkedin.com/in/safa-m-32417122b"}
              />

            </div>
            <div className="member mb-10 lg:mb-0 ">

              <MemberCard
                src={sam}
                name={"Dr.T. Sam Pradeep"}
                designation={"Finance & Support Team Head"}
                desc={"Assistant Professor NWC SRM IST"}
                knowmore={"Know more"}
                knowmoreSrc={"https://www.linkedin.com/in/safa-m-32417122b"}
              />
            </div>
            <MemberCard
              src={supraja}
              name={"Dr.P.Supraja"}
              designation={"Event & Logistics Head"}
              desc={"Assistant Professor NWC SRM IST"}
              knowmore={"Know more"}
              knowmoreSrc={"https://www.linkedin.com/in/safa-m-32417122b"}
            />
          </div>
        </div>

      </div>
      <div className="bg-gradient-to-r from-[#C9D6FF] to-[#E2E2E2] board-members mx-auto w-screen bg-white text-black">
        <h1 className="bg-[#C9D6FF] bg-gradient-to-r text-transparent bg-clip-text from-[#000000] to-[#434343] font-bold mt-10 mb-20 text-left w-fit  text-black pl-20  text-5xl">Board Members</h1>
        <div className="flex  w-fit md:w-full justify-around flex-wrap items-center ">

          <div className="my-10 w-fit md:w-min">
            <MemberCard
              src={arvindg}
              name={"Mr. Aravind G"}
              designation={"Vice-President"}
              desc={"CSE 4th year SRM IST"}
              knowmore={"Know more"}
              knowmoreSrc={"https://www.linkedin.com/in/safa-m-32417122b"}
            />
          </div>
          <div className="lg:my-10 w-fit md:w-min">
            <MemberCard
              src={amrit}
              name={"Mr. Armit Anand"}
              designation={"Joint-Secretary"}
              desc={"CSE 3rd year SRM IST"}
              knowmore={"Know more"}
              knowmoreSrc={"https://www.linkedin.com/in/anandamrit174"}
            />
          </div>
        </div>
      </div>
      <Footer />

    </div>
  );
}
