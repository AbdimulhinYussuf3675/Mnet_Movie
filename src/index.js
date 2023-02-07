import fetchlike from './modules/fetchlike.js';
import newlike from './modules/newlike.js';
import layout from './modules/pagelayout.js';
import './style.css';

const movies = async () => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=girls');
  const data = await res.json();
  return data;
};

movies().then((movie) => {
  movie.map((each, index) => {
    layout(each);
    const num = document.querySelector('.total');
    num.innerText = movie.length;
    const heart = document.querySelectorAll('#heart');
    const card = document.querySelectorAll('.list');
    fetchlike(card);
    newlike(heart, index, each.show.id);
    return each;
  });
});

// get unique api identifier

const getId = async () => {
  const res = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/',
    { method: 'post' });
  const data = await res.text();
  return data;
};

getId();
