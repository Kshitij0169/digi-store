import React from 'react'
import { useNavigate } from 'react-router-dom'

type Image = {
    src: string,
    alt: string
}

type Props = {
    title: string,
    description: string,
    image: Image[],
    price?: number
}

const Products = (props: Props) => {
  const navigate = useNavigate();

  const handlePayClick = () => {
    navigate('/checkout');
  }
  return (
    <div className='flex items-center px-[50px] pt-10'>
      <div className='p-0 mt-10 rounded flex flex-cols-3 card'>
          <div className='flex items-center col-span-3 '><img className='h-[500px] w-[800px] rounded p-5' src={props.image[0].src} alt={props.image[0].alt}/></div>
          <div className='col-span-2 '>
              <h1 className='text-4xl font-bold p-6'>{props.title}</h1>
              <p className='text-gray-900 p-6'>{props.description}</p>
              <ol className='list-disc ml-11 pb-5'>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              </ol>
              <button onClick={handlePayClick} className='ml-6 bg-purple-500 text-white transition-all duration-500 ease-in-out hover:bg-purple-800 hover:scale-105 before:duration-500 before:ease-in-out font-bold rounded focus:outline-none border'>
                  Buy Now
              </button>
          </div>
      </div>
    </div>
  )
}

export default Products