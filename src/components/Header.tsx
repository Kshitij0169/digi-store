import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
    title: string
}

const Header = (props: Props) => {
  return (
    <div className='py-4'>
        <div className='flex justify-center'>
            <Link to='/' className='text-3xl font-bold text-white font-mono'>{props.title}</Link>
        </div>
    </div>
  )
}

export default Header;