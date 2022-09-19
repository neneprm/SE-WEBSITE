import Image from 'next/image'
import logo from '../assets/logo.svg'

const NavBar = () => {
    return (
        <div className='navbar bg-base-100 pb-8'>
            <div className='flex-1'>
                <a className='hover:cursor-pointer'><Image src={logo} /></a>
            </div>
            <div className='flex-none'>
                <button className='btn btn-ghost text-xl font-bold mx-2 border-0 border-b-[3px] border-gradient'>About</button>
                <button className='btn btn-ghost text-xl font-bold mx-2'>Forum</button>
                <button className='btn btn-ghost text-xl font-bold mx-2'>Blogs</button>
                <button className='btn btn-ghost text-xl font-bold mx-2'>Program</button>
                <button className='btn text-xl font-bold bg-gradient hover:bg-gradient-focus border-none text-base-100'>Admissions</button>
            </div>
        </div>
    )
}

export default NavBar