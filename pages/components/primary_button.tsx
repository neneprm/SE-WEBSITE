import { NextPage } from 'next';

interface Props {
    name: string
}

const PrimaryButton: NextPage<Props> = (props) => {
    const { name } = props;

    return (
        <button className='btn btn-xs sm:btn-sm md:btn-md lg:btn-md bg-accent hover:bg-accent-focus border-none text-base-100'>{name}</button>
    );
}

export default PrimaryButton