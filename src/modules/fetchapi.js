import listlayout from './listlayout.js';

const fetchapi = (dataid, arr, headname) => {
  const id = dataid;
  fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cXyK0mK0Ha1BkQqOi8Kz/comments?item_id=${id}`)
    .then((res) => res.json())
    .then((each) => {
      const comsec = document.querySelector('.test');
      arr.push(...arr, ...each);
      each.map((e) => {
        listlayout(e, comsec);
        const header = document.querySelector('.head');
        header.innerHTML = `${headname}(${each.length})`;
        return e;
      });
    });
};

export default fetchapi;
