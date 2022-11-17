import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

import {
  FaScroll,
  FaGraduationCap,
  FaPlane,
  FaLaptopCode,
} from "react-icons/fa"
import HeroArt from "./assets/hero.svg"
import SeLogo from "./assets/se-logo.png"
import CurriculumCover from "../pages/assets/curriculum-cover.jpg"
import GlasgowCover from "../pages/assets/glasgow-cover.jpg"
import ExchangeStudyCover from "../pages/assets/exchange-study-cover.jpg"

import { H1, H3, H4, P } from "./components/headers"
import Card from "./components/card"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Software Engineering | KMITL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="hero bg-base-100 min-h-screen 2xl:min-h-max 2xl:p-40">
        <div className="hero-content flex-col lg:flex-row lg:space-x-10 xl:space-x-30 2xl:space-x-36">
          <div className="max-w-xs lg:max-w-lg">
            <Image src={HeroArt} alt="Hero Art" />
          </div>
          <span className="mt-8 md:mt-4 text-center lg:text-right">
          <div className="w-20 md:w-32 mx-auto lg:mx-0 lg:ml-auto mb-2 md:mb-4">
            <Image src={SeLogo} alt="SE Logo" />
          </div>
            <H1 style="font-bold text-gradient" text="SOFTWARE" />
            <H1 style="font-bold mb-2 md:mb-6" text="ENGINEERING" />
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
      <section className="my-8 lg:-mt-8">
        <H4
          style="font-bold text-gradient -mt-16 md:-mt-4 mb-4 2xl:mt-0"
          text="What is Software Engineering?"
        />

        <div className={`card bg-base-100 card-bordered shadow-lg max-w-fit`}>
          <div className="card-body items-center text-center">
            <FaLaptopCode className="text-secondary text-4xl " />
            <P
              text="Software engineering (SE) is an engineering discipline concerning all aspects of software production, including software analysis, design, development, testing, and deployment. SE requires profound abstract and logical thinking and the application of mathematics, logic, and computer science in order to produce efficient and reliable software with the available resources."
              style="p-2"
            />
            <div className="card-actions justify-center md:justify-end">
              <Link href="/about">
                <button className="btn btn-link text-accent md:btn-accent md:text-base-100 md:no-underline md:hover:no-underline">
                  Read more →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* <H4 style="font-bold text-gradient mt-4 mb-4" text="Forum" /> */}
      {/* <H4 style="font-bold text-gradient mb-4" text="Blogs" /> */}

      {/* <section className="mb-8">
        <H4 style="font-bold text-gradient mb-4" text="Program" />
        <div className="card bg-base-100 card-bordered card-body shadow-lg w-full p-12">
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <Card
              image={CurriculumCover}
              imageAlt="curriculum-cover"
              title="Curriculum"
              icon={<FaScroll className="text-primary" />}
              body=""
              link="/program/curriculum"
            />
            <Card
              image={GlasgowCover}
              imageAlt="glasgow-cover"
              title="KMITL-Glasgow"
              icon={<FaGraduationCap className="text-primary" />}
              body=""
              link="/program/kmitl-glasgow"
            />
            <Card
              image={ExchangeStudyCover}
              imageAlt="exchange-study-cover"
              title="Exchange Study"
              icon={<FaPlane className="text-primary" />}
              body=""
              link="/program/exchange-study"
            />
          </div>
        </div>
      </section> */}

      <H4 style="font-bold text-gradient mb-4" text="Admissions" />

      {/* <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, repellat! Deserunt eum quae, earum eos distinctio minima a mollitia? Beatae voluptates aliquam commodi ratione quis molestiae magnam vero dolore officiis.
      </p>
      <button className='btn bg-gradient'>Hello daisyUI</button>
      <GradientButton name='Read more →' /> */}
    </>
  )
}

export default Home
