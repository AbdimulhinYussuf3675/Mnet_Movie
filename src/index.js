import './style.css';
import addLikes from './modules/addlikes.js';
import fetchlike from './modules/fetchlike.js';
import layout from './modules/pagelayout.js';
import popUpHandler from './modules/resPopup';

const movies = async () => {
  const res = await fetch ('https://api.tvmaze.com/search/shows?q=girls');
  const data = await res.json();
  return data;
}

movies().then((movie)=>{
    movie.map((each,index)=>{
        layout(each)
        popUpHandler(each)
        const num = document.querySelector('.total');
        num.innerText = movie.length;
        const heart = document.querySelectorAll('#heart');
        heart.forEach((heat,inde)=>{
            heat.addEventListener('click',()=>{
                if(inde === index){
                   addLikes(each.show.id)
                }
     
             })
        })
        fetchlike(each.show.id) 
     
    })
})



// const getId = async () => {
//     const res = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/',
//          {method: "post"}                   
//     )
//     const data = await res.text()
//     return data
// }

// getId().then((dat)=>{console.log(dat)})


'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8t6g73PoMQ4PoGggqL1h/likes'