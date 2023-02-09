const layout = (arry) => {
  const wrapper = document.querySelector('.wrap');
  const template = `
                <div class="desc">
                    <div class="img">
                        <img src=${arry.show.image.medium}>
                    </div>
                    <div class="name">
                       <p>${arry.show.name}</p>
                       <i class="fa-solid fa-heart" id="heart"></i> 
                    </div>
                    <p class=likes><span class='like'></span>likes</p>
                </div>
                <div class="btn">
                  <button id="comment" data-id = ${arry.show.id}>comments</button>
                </div>
                <div class="btn">
                  <button id="reserve" data-id = ${arry.show.id}>reservations</button>
                </div>
                
          `;
  const list = document.createElement('li');
  list.setAttribute('data-id', arry.show.id);
  list.classList.add('list');
  list.innerHTML = template;
  wrapper.appendChild(list);
};

export default layout;