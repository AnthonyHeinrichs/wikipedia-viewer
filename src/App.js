import './App.css';
import { useState } from 'react'

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
        ? <form>
            <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
            <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Wikipedia" required=""/>
                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
            <button onClick={handleClick} className='text-white'>x</button>
          </form>
        : <button onClick={handleClick} className='text-white'>Search</button>
      }
    </div>
  )
}
