import addcomment from './modules/addcomment.js';
import commentForm from './modules/comment.js';
import fetchapi from './modules/fetchapi.js';
import fetchlike from './modules/fetchlike.js';
import listlayout from './modules/listlayout.js';
import resLayout from './modules/resLayout.js';
import newlike from './modules/newlike.js';
import layout from './modules/pagelayout.js';
import poptemp from './modules/poptemplate.js';
import reserveForm from './modules/reserve.js';
import './style.css';
import addReserve from './modules/addReserve.js';
import fetchResApi from './modules/fetchApiRes.js';
import moviecount from './modules/moviecount.js';

const movies = async () => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=girls');
  const data = await res.json();
  return data;
};

movies().then((movie) => {
  movie.map((each, index) => {
    layout(each);
    const wrapper = document.querySelector('.wrap');
    moviecount(wrapper);
    const heart = document.querySelectorAll('#heart');
    const card = document.querySelectorAll('.list');
    fetchlike(card);
    newlike(heart, index, each.show.id);

    // Comment Event Listeners
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
            lists.map((e) => listlayout(e, comsec));
            user.value = '';
            text.value = '';
            const header = document.querySelector('.head');
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

    // Reserve Event listeners start here
    const reserve = document.querySelectorAll('#reserve');
    reserve.forEach((res, ind) => {
      res.addEventListener('click', () => {
        if (index === ind) {
          const listr = [];
          poptemp(each, 'reserve');
          reserveForm();
          // fetch api
          fetchResApi(each.show.id, listr, 'Reservation');

          // add comment
          const form = document.querySelector('form');
          const user = document.querySelector('#name');
          const sDate = document.querySelector('#start-date');
          const eDate = document.querySelector('#end-date');
          const comsec = document.querySelector('.test');
          form.addEventListener('submit', (e) => {
            e.preventDefault();
            addReserve(each.show.id, user.value, sDate.value, eDate.value);
            listr.push({
              creation_date: 'few minutes ago', username: user.value, date_start: sDate.value, date_end: eDate.value,
            });
            comsec.innerHTML = '';
            listr.map((e) => resLayout(e, comsec));
            user.value = '';
            sDate.value = '';
            eDate.value = '';
            const header = document.querySelector('.head');
            header.innerHTML = `Reservation ${listr.length}`;
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
    // Reserve end here
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
