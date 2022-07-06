import './App.css';
import { useState } from 'react'
import Search from './components/search'

export default function App() {
  const [showSearch, setShowSearch] = useState(false)

  const handleClick = () => {
    setShowSearch((prevState) => {
      return !prevState
    })
  }

  return (
    <div className='mt-20 grid place-items-center'>
      <a href='https://en.wikipedia.org/wiki/Special:Random'
        rel='noreferrer'
        target='_blank'
        className="bg-gray-800 hover:bg-gray-600 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        Get a Random Wikipedia Article
      </a>
      <p className='mt-6 text-white'>or...</p>
      {showSearch
        ? <Search />
        : <button onClick={handleClick} className='text-white mt-3'>Search on Wikipedia</button>
      }
    </div>
  )
}
