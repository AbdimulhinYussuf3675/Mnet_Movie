import layout from './modules/pagelayout.js';
import './style.css';

const movies = async () => {
  const res = await fetch ('https://api.tvmaze.com/search/shows?q=girls');
  const data = await res.json();
  return data;
}

movies().then((movie)=>{
    movie.map((each)=>{
        layout(each)
        const num = document.querySelector('.total');
        num.innerText = movie.length
    })
})