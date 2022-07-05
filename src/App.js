import './App.css';
import { useEffect } from 'react'

export default function App() {

  let url = "https://en.wikipedia.org/w/api.php";

  const params = {
    action: "query",
    format: "json",
    list: "random",
    rnlimit: "5"
  };

  useEffect(() => {
    url = url + "?origin=*";
    Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

    fetch(url)
      .then(function(response){return response.json();})
      .then(function(response) {
          var randoms = response.query.random;
          for (var r in randoms) {
              console.log(randoms[r]);
          }
    } )
    .catch(function(error){console.log(error);});
  })

  return (
    <div className='mt-20 grid place-items-center'>
      <button className="bg-gray-800 hover:bg-gray-600 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        Get a Random Wikipedia Article
      </button>
      <p className='mt-6 text-white'>or...</p>
      <h2 className='text-white'>Search for an Article</h2>
    </div>
  )
}
