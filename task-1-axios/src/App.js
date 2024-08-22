import { useEffect, useState } from 'react';
import axios from 'axios';
import Feed from './Feed';

function App() {
  const [shows, setShows] = useState([]);

  const getShows = async () => {
    try {
      const res = await axios.get("https://api.themoviedb.org/3/discover/movie", {
        params: {
          api_key: 'f57bb8d0a926294e80e8198ac58085b4',
        }
      });
      setShows(res.data.results); 
  
      console.log(res.data.results); // shows array'ını konsola yazdırır
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getShows();
  }, []);

  return (
    <>
      <div className="px-12">
        <h1 className="text-xl font-semibold mb-2">
          Task - Data Fetching
        </h1>

        <div className="flex flex-col gap-4 sm:grid sm:grid-cols-3 px-4 sm:px-8 md:px-10 lg:px-12">
          {shows.map((data, i) => {
            const imgUrl = `https://image.tmdb.org/t/p/w500${data?.poster_path}`;

            return (
              <Feed
                key={i}
                img={imgUrl}
                title={data.title}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
