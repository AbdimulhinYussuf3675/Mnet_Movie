import resLayout from './resLayout.js';

const fetchResApi = (dataid, arr, headname) => {
  const id = dataid;
  fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cXyK0mK0Ha1BkQqOi8Kz/reservations?item_id=${id}`)
    .then((res) => res.json())
    .then((each) => {
      const comsec = document.querySelector('.test');
      arr.push(...arr, ...each);
      each.map((e) => {
        resLayout(e, comsec);
        const header = document.querySelector('.head');
        header.innerHTML = `${headname}(${each.lengt})`;
        return e;
      });
    });
};

export default fetchResApi;
