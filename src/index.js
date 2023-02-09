import addcomment from './modules/addcomment.js';
import commentForm from './modules/comment.js';
import fetchapi from './modules/fetchapi.js';
import fetchlike from './modules/fetchlike.js';
import listlayout from './modules/listlayout.js';
import layout from './modules/pagelayout.js';
import poptemp from './modules/poptemplate.js';
import './style.css';

const movies = async () => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=girls');
  const data = await res.json();
  return data;
};

movies().then((movie) => {
  movie.map((each, index) => {
    console.log(each);
    layout(each);
    const num = document.querySelector('.total');
    num.innerText = movie.length;
    const card = document.querySelectorAll('.list');
    fetchlike(card);
    const comment = document.querySelectorAll('#comment');
    comment.forEach((com, ind) => {
      com.addEventListener('click', () => {
        if (index === ind) {
          const lists = [];
          poptemp(each, 'comment');
          commentForm();
          // fetch api
          fetchapi(each.show.id, lists, 'comment');

          // add comment
          const form = document.querySelector('form');
          const user = document.querySelector('#name');
          const text = document.querySelector('#text');
          const comsec = document.querySelector('.test');
          form.addEventListener('submit', (e) => {
            e.preventDefault();
            addcomment(each.show.id, user.value, text.value);
            lists.push({ creation_date: 'few minutes ago', username: user.value, comment: text.value });
            comsec.innerHTML = '';
            lists.map((e) => { listlayout(e, comsec); });
            user.value = '';
            text.value = '';
            const header = document.querySelector('.head');
            // counter start
            header.innerHTML = `comment ${lists.length}`;
          });
          // to cancel the pop up
          const X = document.querySelector('.X');
          X.addEventListener('click', () => {
            const pop = document.querySelector('.pop');
            pop.remove();
            pop.innerrHTML = '';
          });
        }
      });
    });
    return each;
  });
});

const getId = async () => {
  const res = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/',
    { method: 'post' });
  const data = await res.text();
  return data;
};

getId();
