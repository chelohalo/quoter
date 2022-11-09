import React from 'react'
import useQuote from '../hooks/useQuote'

const Error = () => {
  const { error } = useQuote()
  
    return (
    <div>
        <p className='border text-center border-red-400 bg-red-100 text-red-700 py-3'>
            {error}
        </p>
    </div>
  )
}

export default Error