import React from 'react'

type Props = {}

const Success = (props: Props) => {
  return (
    <div className='ml-4 rounded px-6 py-8 flex-col flex mt-11 items-start h-min container card'>
        <h1 className='text-gray-900'>Your purchase was successfull</h1>
        <p>You will receive an email with your order confirmation shortly.</p>
    </div>
  )
}

export default Success