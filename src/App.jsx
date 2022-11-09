
import InsuranceApp from './components/InsuranceApp'
import { QuoteProvider } from './context/QuoteProvider'

const App = () => {

  return (
    <QuoteProvider>
      <InsuranceApp/>
    </QuoteProvider>
  )
}

export default App