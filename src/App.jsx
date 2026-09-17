import { useState } from 'react'
import './App.css'
import {Input} from './components'
import useCurrencyInfo from './hooks/useCurrencyinfo'

function App() {

  const [amount, setamount] = useState("")
  const [from, setfrom] = useState("usd")
  const [to, setto] = useState("inr")
  const [convertedAmount, setconvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo.currencies)

  const swap = () =>{
    setfrom(to)
    setto(from)
    setamount(convertedAmount)
    setconvertedAmount(amount)
    
  }
  const convert = () =>{
    setconvertedAmount(amount * currencyInfo.rates[to])
  }
  return (
    <>
      <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
      style={{backgroundImage:`url('https://images.pexels.com/photos/35251423/pexels-photo-35251423.jpeg?_gl=1*t83v1v*_ga*MTMzMTQyNTA0NC4xNzg5NTM4OTI5*_ga_8JE65Q40S6*czE3ODk1Mzg5MjgkbzEkZzEkdDE3ODk1Mzg5NTgkajMwJGwwJGgw')`,
    }}
    >
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form
          onSubmit={(e)=>{
            e.preventDefault();
            convert()
          }}
          >
            <div className='w-full mb-1 '>
              <Input
              label="from"
              amount={amount}
              currencyOption={options}
              onCurrencyChange={(currency)=>setfrom(currency)}
              selectCurrency={from}
              onAmountChange={(amount)=>setamount(amount)}
              />
            </div>
            <div className='relative w-full h-0.5'>
              <button
              type='button'
              className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
              onClick={swap}
              >Swap</button>
            </div>
            <div className='w-full mt-1 mb-4'>
              <Input
              label="To"
              amount={convertedAmount}
              currencyOption={options}
              onCurrencyChange={(currency)=>setto(currency)}
              selectCurrency={to}
              amountDisable
              />
            </div>
            <button
            type='submit'
            className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
            </form>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
