import React, { Fragment, useState } from "react";
import { BRANDS, YEARS, PLANS } from "../constants";
import useQuote from "../hooks/useQuote";
import Error from "./Error";

const Form = () => {

  const { data, handleChangeData, error, handleChangeError, quoteInsurance  } = useQuote();
  
  const handleSubmit = e => {
    e.preventDefault()
    
    if(Object.values(data).includes('')){
      handleChangeError('All fields are mandatory')
      return
    }
    
    handleChangeError('')

    //TODO : COTIZAR
    quoteInsurance()
  }

  return (
    <>
    { error && <Error />}
    <form onSubmit={handleSubmit}>
      <div className="my-5">
        <label className="block mb-3 font-bold text-gray-400 uppercase">
          Brand
        </label>
        <select
          name="brand"
          className="w-full p-3 bg-white border border-gray-200"
          onChange={(e) => handleChangeData(e)}
          value={data.brand}
        >
          <option value="">--SELECT BRAND--</option>
          {BRANDS.map((b) => {
            return (
              <option key={b.id} value={b.id}>
                {" "}
                {b.name}{" "}
              </option>
            );
          })}
        </select>
      </div>
      <div className="my-5">
        <label className="block mb-3 font-bold text-gray-400 uppercase">
          Year
        </label>
        <select
          value={data.year}
          name="year"
          className="w-full p-3 bg-white border border-gray-200"
          onChange={(e) => handleChangeData(e)}
        >
          <option value="">--SELECT YEAR--</option>
          {YEARS.map((year) => {
            return (
              <option key={year} value={year}>
                {" "}
                {year}{" "}
              </option>
            );
          })}
        </select>
      </div>
      <div className="my-5">
        <label className="block mb-3 font-bold text-gray-400 uppercase">
          Plan
        </label>
        <div className="flex gap-3 items-center">
          {PLANS.map((plan) => (
            <Fragment key={plan.id}>
              <label>{plan.name}</label>
              <input
                type="radio"
                name="plan"
                value={plan.id}
                onChange={(e) => handleChangeData(e)}
              />
            </Fragment>
          ))}
        </div>
      </div>
      <input
        type="submit"
        className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold"
        value="QUOTE"
      />
    </form>
    </>
  );
};

export default Form;
