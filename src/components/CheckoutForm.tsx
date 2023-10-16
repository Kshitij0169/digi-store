import React, { useState } from 'react';
import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import PRODUCT from '../productInfo';

export const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState<string | undefined>('');
  const [emailInput, setEmailInput] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (elements == null || stripe == null) {
      return;
    }

    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError?.message) {
      // Show error to your customer
      setErrorMessage(submitError.message);
      return;
    }

    // Create the PaymentIntent and obtain clientSecret from your server endpoint
    const res = await fetch('https://pvmdb5c2fi.us.aircode.run/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        currency: 'usd',
        email: emailInput,
        amount: PRODUCT.price * 100,
        paymentMethodType: "card"
      }),
    });
    

    const { client_secret: clientSecret } = await res.json();
    
    

    const { error } = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      clientSecret,
      confirmParams: {
        return_url: `${window.location.origin}/success`,
      },
    });

    if (error) {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (for example, payment
      // details incomplete)
      setErrorMessage(error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <div className='ml-10 px-4 py-5 bg-white rounded-lg drop-shadow-2xl shadow-white'>
      <form onSubmit={handleSubmit} className='px-4'>
        <div className='mb-3 pt-3'>
          <label className='' htmlFor="email-input">Email</label>
          <div>
            <input value={emailInput} onChange={(e => setEmailInput(e.target.value))} type="email" id="email-input" placeholder='someone@email.com' className=' input p-3 w-full bg-[#fff] rounded-[5px] border border-[#e6e6e6] box-shadow-custom ' />
          </div>
        </div>
        <PaymentElement className='input' />
        <button type="submit" disabled={!stripe || !elements} className='mt-3 bg-purple-500 text-white transition-all duration-500 ease-in-out hover:bg-purple-800 hover:scale-105 before:duration-500 before:ease-in-out font-bold rounded focus:outline-none border'>
          Pay
        </button>
        {/* Show error message to your customers */}
        {errorMessage && <div>{errorMessage}</div>}
      </form>
    </div>
  );
};