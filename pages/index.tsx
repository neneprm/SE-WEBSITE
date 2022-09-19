import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import hero from './assets/hero.svg'

import NavBar from './components/navbar'
import PrimaryButton from './components/primary_button'

const Home: NextPage = () => {
  return (
    <div className='bg-base-100 font-Nunito'>
      <NavBar />
      <div className='flex justify-center items-center space-x-10'>
        <Image src={hero} />
        <span className='text-right'>
          <h1 className='sm:text-2xl md:text-5xl lg:text-8xl font-bold text-gradient'>SOFTWARE</h1>
          <h1 className='sm:text-2xl md:text-5xl lg:text-8xl font-bold mb-6'>ENGINEERING</h1>
          <h3 className='mb-3'>Bachelor of Engineering</h3>
          <h5>Become professional software developers<br/>Change the world with lines of code</h5>
        </span>
      </div>
      <h5 className='font-bold text-gradient'>What is Software Engineering?</h5>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, repellat! Deserunt eum quae, earum eos distinctio minima a mollitia? Beatae voluptates aliquam commodi ratione quis molestiae magnam vero dolore officiis.
      </p>
      <button className='btn bg-gradient'>Hello daisyUI</button>
      <PrimaryButton name='Read more →' />
    </div>
  )
}

export default Home
