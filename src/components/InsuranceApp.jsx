import React from 'react'
import Form from './Form'
import useQuote from '../hooks/useQuote'
import Spinner from './Spinner'
import Result from './Result'



const InsuranceApp = () => {

  const {loading} = useQuote()

  return (
    <>
    <header className='my-10'>
      <h1 className='text-white text-center text-4xl'>
      Insurance Quoter <br />
      </h1>
    </header>
    <main className='bg-white md:w-2/3 lg:w-1/2 mx-auto shadow rounded-lg p-10'>
      <Form/>
      {loading ? <Spinner/> : <Result/>}
    </main>
    </>
  )
}

export default InsuranceApp