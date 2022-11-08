import Image from 'next/image'
import logo from '../assets/logo.svg'
import { HiMenu } from "react-icons/hi";
import { useState } from 'react';
import Link from 'next/link';

interface IButton {
    style: string,
    link: string,
    text: string,

}

const NavBar = () => {
    const Button: React.FunctionComponent<IButton> = ({ style, link, text }) => {
        return (
            <button className={`btn btn-ghost text-sm sm:text-base md:text-lg lg:text-xl font-bold mx-2 ${style}`}>
                <Link href={`${link}`}><a>{text}</a></Link>
            </button>
        )
    }
    return (
        <div className='navbar'>
            <div className='flex-1'>
                {/* <a className='hover:cursor-pointer'><Image src={logo} /></a> */}
                <button className='font-bold text-gradient sm:text-base md:text-md lg:text-lg'>
                    <Link href='/'><a>SOFTWARE</a></Link>
                </button>
            </div>
            <div className='flex-none hidden xl:block'>
                <Button style="border-0 border-b-[3px] border-gradient" link="/about" text="About" />
                <Button style="" link="/forum" text="Forum"/>
                <Button style="" link="/blogs" text="Blogs"/>
                <Button style="" link="/program" text="Program"/>
                <Button style="bg-gradient hover:bg-gradient-focus border-none text-base-100" link="/admissions" text="Admissions"/>
            </div>

            <div className="flex-none xl:hidden">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost">
                        <HiMenu className='sm:text-base md:text-md text-primary hover:text-primary-focus' />
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li><a>About</a></li>
                        <li><a>Forum</a></li>
                        <li><a>Blogs</a></li>
                        <li><a>Program</a></li>
                        <li>
                            <a className="justify-between">
                                Admission
                                <span className="badge bg-gradient text-base-100 border-none">!!!</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar