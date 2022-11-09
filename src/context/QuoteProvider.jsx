import { createContext } from 'react'

const QuoteContext = createContext()

const QuoteProvider = ({children}) => {

  const gonza = 'gallina'

  return (
    <QuoteContext.Provider 
      value={{
        gonza
      }}
      >
      {children}
    </QuoteContext.Provider>
  )
}

export {
  QuoteProvider
}
export default QuoteContext