import db from './firebase.config';
import React,{useState,useEffect} from 'react';
import ReactHlsPlayer from 'react-hls-player';

function App() {
  const [movies,setmovie]=useState([]);
  const [selected,select]=useState("");
  const fetchprod=async()=>{
    const response=db.collection('movies');
    const data=await response.get();
    data.docs.forEach(item=>{
      let full = item.data();
      full["id"] = item.id;
      setmovie(movies => [...movies,full]);
    })
  }
  useEffect(() => {
    fetchprod();
  }, [])
  function watch(item) {
    select(<ReactHlsPlayer
    src={item}
    autoPlay={false}
    controls={true}
    width="100%"
    height="auto"
  />);
  }
  return (
    <div className="App">
        <link itemprop="url" href="https://unpkg.com/video.js/dist/video-js.css" rel="stylesheet"/>
        <script src="https://unpkg.com/video.js/dist/video.js"></script>
        <script src="https://unpkg.com/videojs-contrib-hls/dist/videojs-contrib-hls.js"></script>
      <header>
        <h1>ELHADEDE MOVIE</h1>
      </header>
      <main>
          {
            movies.map(function(name){
              return(
                <div className="item" onClick={() => watch(name.url)}>
                  <h4>{name.name}</h4>
                </div>
              );
            })
          }
      </main>
      <div>
          {selected}
      </div>
    </div>
  );
}

export default App;