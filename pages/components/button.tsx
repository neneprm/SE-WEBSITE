import { useState } from 'react';
import Link from 'next/link';

interface IButton {
    style: string,
    link: string,
    text: string,

}

const Button: React.FunctionComponent<IButton> = ({ style, link, text }) => {
    return (
        <button className={`btn btn-ghost text-sm sm:text-base md:text-lg lg:text-xl font-bold mx-2 ${style}`}>
            <Link href={`${link}`}><a>{text}</a></Link>
        </button>
    )
}
export default Button