import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import hero from './assets/hero.svg'

import PrimaryButton from './components/primary_button'

interface IHeader {
  text: string,
  style: string
}

interface ICard {
  title: string,
  body: string,
  action: string
}

const Home: NextPage = () => {
  const H1: React.FunctionComponent<IHeader> = ({ style, text }) => {
    return (
      <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl ${style}`}>{text}</h1>
    )
  }
  const H3: React.FunctionComponent<IHeader> = ({ style, text }) => {
    return (
      <h3 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl ${style}`}>{text}</h3>
    )
  }
  const H4: React.FunctionComponent<IHeader> = ({ style, text }) => {
    return (
      <h4 className={`text-base sm:text-lg md:text-xl lg:text-2xl ${style}`}>{text}</h4>
    )
  }
  const P: React.FunctionComponent<IHeader> = ({ style, text }) => {
    return (
      <p className={`text-sm sm:text-base md:text-lg lg:text-xl ${style}`}>{text}</p>
    )
  }
  const Card: React.FunctionComponent<ICard> = ({ title, body, action }) => {
    return (
      <div className="card w-96 bg-base-100 card-bordered">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{body}</p>
          <div className="card-actions justify-end">
            <button className="btn">{action}</button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <section className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row lg:space-x-40">
          <Image className="max-w-sm rounded-lg shadow-2xl" src={hero} />
          <span className='text-center lg:text-right'>
            <H1 style="font-bold text-gradient" text="SOFTWARE" />
            <H1 style="font-bold mb-6" text="ENGINEERING" />
            <H3 style="mb-3" text="Bachelor of Engineering" />
            <H4 style="" text="Become professional software developers" />
            <H4 style="" text="Change the world with lines of code" />
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

      <H4 style="font-bold text-gradient" text="What is Software Engineering?" />
      <section className="drop-shadow-lg">
        <div className="card w-full bg-base-100 card-bordered">
          <div className="card-body font-normal">
            <P style="" text="Software engineering (SE) is an engineering discipline concerning all aspects of software production, including software analysis, design, development, testing, and deployment. SE requires profound abstract and logical thinking and the application of mathematics, logic, and computer science in order to produce efficient and reliable software with the available resources."/>
            <div className="card-actions justify-end">
              <button className="btn btn-accent">
                <Link href={"/about"}><a>Read more →</a></Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      <H4 style="font-bold text-gradient" text="Forum" />
      <section className="carousel carousel-center p-4 space-x-4 w-full">
        <div id="slide1" className="carousel-item relative w-full justify-between">
          <a href="#slide3" className="btn btn-circle place container my-auto">❮</a>
          <Card title="Card title!" body="If a dog chews shoes whose shoes does he choose?" action="Read more →" />
          <Card title="Card title!" body="If a dog chews shoes whose shoes does he choose?" action="Read more →" />
          <Card title="Card title!" body="If a dog chews shoes whose shoes does he choose?" action="Read more →" />
          <a href="#slide2" className="btn btn-circle ontainer my-auto">❯</a>
        </div>

        <div id="slide2" className="carousel-item relative w-full justify-between">
          <a href="#slide1" className="btn btn-circle place container my-auto">❮</a>
          <Card title="Card title!" body="If a dog chews shoes whose shoes does he choose?" action="Read more →" />
          <Card title="Card title!" body="If a dog chews shoes whose shoes does he choose?" action="Read more →" />
          <Card title="Card title!" body="If a dog chews shoes whose shoes does he choose?" action="Read more →" />
          <a href="#slide3" className="btn btn-circle ontainer my-auto">❯</a>
        </div>

        <div id="slide3" className="carousel-item relative w-full justify-between">
          <a href="#slide2" className="btn btn-circle place container my-auto">❮</a>
          <Card title="Card title!" body="If a dog chews shoes whose shoes does he choose?" action="Read more →" />
          <Card title="Card title!" body="If a dog chews shoes whose shoes does he choose?" action="Read more →" />
          <Card title="Card title!" body="If a dog chews shoes whose shoes does he choose?" action="Read more →" />
          <a href="#slide1" className="btn btn-circle ontainer my-auto">❯</a>
        </div>
      </section>

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
