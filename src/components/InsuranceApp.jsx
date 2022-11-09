import React from 'react'
import Form from './Form'
import { useContext } from 'react'
import  QuoteContext  from '../context/QuoteProvider'



const InsuranceApp = () => {

  const { gonza } = useContext(QuoteContext)

  return (
    <>
    <header className='my-10'>
      <h1 className='text-white text-center text-4xl'>
      Insurance Quoter <br />
      {gonza}
      </h1>
    </header>
    <main className='bg-white md:w-2/3 lg:w-1/2 mx-auto shadow rounded-lg p-10'>
      <Form/>
    </main>
    </>
  )
}

export default InsuranceApp