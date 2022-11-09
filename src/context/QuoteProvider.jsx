import { createContext, useState } from "react";
import { getYearsOld } from "../helpers";

const QuoteContext = createContext();

const QuoteProvider = ({ children }) => {
  const [data, setData] = useState({
    brand: "",
    year: "",
    plan: "",
  });

  const [error, setError] = useState('')

  const handleChangeData = (e) => {
    setData({ 
      ...data, 
      [e.target.name]: e.target.value 
    });
  };

  const handleChangeError = (error) => {
    setError(error)
  }

  const quoteInsurance = () => {
    console.log('cotizando')
    // Una base
    let base = 2000

    // Obtener diferencia de años
    const yearsOld = getYearsOld(data.year)

    // Hay que restar el 3%
    base = base * (100-yearsOld*3)/100
    console.log(base)

    //American 15%, European 30%, Asian 5%

    // Basic 20%, P¨remium 50%
  }

  return (
    <QuoteContext.Provider
      value={{
        data,
        handleChangeData,
        error,
        handleChangeError,
        quoteInsurance
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};

export { QuoteProvider };
export default QuoteContext;
