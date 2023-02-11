import addLikes from './addlikes.js';

const newlike = (heart, index, id) => {
  heart.forEach((heat, inde) => {
    heat.addEventListener('click', () => {
      if (inde === index) {
        addLikes(id);
        const parent = heat.parentElement.parentElement.parentElement;
        const eachlike = parent.querySelector('.like');
        const eachIntext = eachlike.innerText;
        const increase = parseInt(eachIntext, 10) + 1;
        eachlike.innerText = increase;
      }
    });
  });
};
export default newlike;