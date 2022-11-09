import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import hero from "./assets/hero.svg";

import PrimaryButton from "./components/primary_button";
import { H1, H3, H4, P } from "./components/headers";
import Card from "./components/card";

const Home: NextPage = () => {
  return (
    <>
      <section className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row lg:space-x-10 xl:space-x-30">
          <div className="max-w-xs lg:max-w-lg">
            <Image src={hero} />
          </div>
          <span className="text-center lg:text-right">
            <H1 style="font-bold text-gradient" text="SOFTWARE" />
            <H1 style="font-bold mb-6" text="ENGINEERING" />
            <H3 style="mb-3" text="Bachelor of Engineering" />
            <H4 text="Become professional software developers" />
            <H4 text="Change the world with lines of code" />
          </span>
        </div>
      </section>

      {/* <div className='flex justify-center items-center space-x-10'>
        <Image className="max-w-sm rounded-lg shadow-2xl" src={hero} />
        <span className='text-center lg:text-right'>
          <H1 style="" text="SOFTWARE"/>
          <h1 className='sm:text-2xl md:text-5xl lg:text-8xl font-bold mb-6'>ENGINEERING</h1>
          <h3 className='sm:text-lg md:text-2xl lg:text-5xl mb-3'>Bachelor of Engineering</h3>
          <h4 className='sm:text-base md:text-lg lg:text-2xl'>Become professional software developers<br />Change the world with lines of code</h4>
        </span>
      </div> */}

      <H4
        style="font-bold text-gradient -mt-16 md:-mt-4 mb-4"
        text="What is Software Engineering?"
      />
      <Card
        cardStyle="w-full"
        body="Software engineering (SE) is an engineering discipline concerning all aspects of software production, including software analysis, design, development, testing, and deployment. SE requires profound abstract and logical thinking and the application of mathematics, logic, and computer science in order to produce efficient and reliable software with the available resources."
        link="/about"
      />

      <H4 style="font-bold text-gradient" text="Forum" />
      <H4 style="font-bold text-gradient" text="Blogs" />
      <H4 style="font-bold text-gradient" text="Program" />
      <H4 style="font-bold text-gradient" text="Admissions" />

      {/* <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, repellat! Deserunt eum quae, earum eos distinctio minima a mollitia? Beatae voluptates aliquam commodi ratione quis molestiae magnam vero dolore officiis.
      </p>
      <button className='btn bg-gradient'>Hello daisyUI</button>
      <PrimaryButton name='Read more →' /> */}
    </>
  )
}

export default Home
