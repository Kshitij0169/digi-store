import React from 'react'
import { Product } from '../types/types'

const ProductCard = (props: Product) => {
  return (
    <div className='border rounded px-6 py-8 flex items-start h-min card ml-4'>
      <div className="w-[200px] h-[140px]"><img className='rounded-lg' src={props.image} alt={`${props.title} image`} /></div>
      <div className="flex-grow flex">
        <div className='pl-4'>
          <h3 className='text-2xl font-bold'>{props.title}</h3>
          <p className='text-gray-900'>{props.description}</p>
          <div className=''><p className='text-bold'>${props.price}</p></div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard