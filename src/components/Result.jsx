import { useRef, useCallback, useMemo } from "react"
import useQuote from "../hooks/useQuote"
import { BRANDS, PLANS } from "../constants"

const Result = () => {
  const {result, data} = useQuote()
  const {year, brand, plan} = data
  console.log(year)
  const yearRef = useRef(year)
console.log(yearRef,'yearref')

  const brandName = useMemo( ()=> BRANDS.find(m => Number(brand) === m.id), [result])
  const planName = useMemo( ()=> PLANS.find(m => Number(plan) === m.id), [result])

  console.log(planName)
  if(result === 0){
    return null
  }

  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
      <h2 className="text-gray-600 font-black text-3xl">
        Resumen
      </h2>
      {/* <p className="my-2">
        <span className="font-bold">Marca: </span>
        {brandName}
      </p> */}
      <p className="my-2">
        <span className="font-bold">Plan: </span>
        {planName }
      </p>
      {/* <p className="my-2">
        <span className="font-bold">Year: </span>
        {yearRef}
      </p> */}
      <p className="my-2 text-2xl">
        <span className="font-bold">Total Amount: </span>
        {result}
      </p>
    </div>
  )
}

export default Result