import { createContext, useState } from "react";
import { getYearsOld, incrementByBrand, incrementByPlan, fixByCurrency } from "../helpers";

const QuoteContext = createContext();

const QuoteProvider = ({ children }) => {
  const [data, setData] = useState({
    brand: "",
    year: "",
    plan: "",
  });

  const [error, setError] = useState('')

  const [result,setResult] = useState(0)

  const [loading, setLoading] = useState(false)

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

    // Una base
    let result = 2000

    // Obtener diferencia de años
    const yearsOld = getYearsOld(data.year)

    // Hay que restar el 3%
    result = result * (100-yearsOld*3)/100

    //American 15%, European 30%, Asian 5%
    result *= incrementByBrand(data.brand)

    // Basic 20%, P¨remium 50%

    result *= incrementByPlan(data.plan)

    result = fixByCurrency(result) 

    setLoading(true)
    
    setTimeout(() => {
      setLoading(false)
      setResult(result)
    }, 1000);
  }

  return (
    <QuoteContext.Provider
      value={{
        data,
        handleChangeData,
        error,
        handleChangeError,
        quoteInsurance,
        result,
        loading
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};

export { QuoteProvider };
export default QuoteContext;
