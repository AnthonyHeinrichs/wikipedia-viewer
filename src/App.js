import './App.css';

export default function App() {

  return (
    <div className='mt-20 grid place-items-center'>
      <a href='https://en.wikipedia.org/wiki/Special:Random'
        rel='noreferrer'
        target='_blank'
        className="bg-gray-800 hover:bg-gray-600 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        Get a Random Wikipedia Article
      </a>
      <p className='mt-6 text-white'>or...</p>
      <h2 className='text-white'>Search for an Article</h2>
    </div>
  )
}
