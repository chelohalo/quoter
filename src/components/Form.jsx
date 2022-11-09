import React, { Fragment } from 'react'
import { BRANDS, YEARS, PLANS } from '../constants'

const Form = () => {


  return (
    <form>
      <div className='my-5'>
        <label className='block mb-3 font-bold text-gray-400 uppercase'>
          Brand
        </label>
        <select name="brand" className='w-full p-3 bg-white border border-gray-200'>
          <option value=''>--SELECT BRAND--</option>
          {BRANDS.map(brand => {
            return (
              <option key={brand.id} value={brand.id}> {brand.name} </option>)
          })}
        </select>
      </div>
      <div className='my-5'>
        <label className='block mb-3 font-bold text-gray-400 uppercase'>
          Year
        </label>
        <select name="year" className='w-full p-3 bg-white border border-gray-200'>
          <option value=''>--SELECT YEAR--</option>
          {YEARS.map(year => {
            return (
              <option key={year} value={year}> {year} </option>)
          })}
        </select>
      </div>
      <div className='my-5'>
        <label className='block mb-3 font-bold text-gray-400 uppercase'>
          Year
        </label>
        <div className='flex gap-3 items-center'>
          {PLANS.map(plan =>
            <Fragment key={plan.id}>
              <label>
                {plan.name}
              </label>
              <input
                type='radio'
                name='plan'
                value={plan.id}
              />
            </Fragment>
          )}
        </div>
      </div>
      <input
      type='submit'
      className='w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold'
      value='QUOTE'
      />
    </form>
  )
}

export default Form