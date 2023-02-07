const layout = (arry) => {
  const wrapper = document.querySelector('.wrap')
  const template = `
                <div class="desc">
                    <div class="img">
                        <img src=${arry.show.image.medium}>
                    </div>
                    <div class="name">
                        <p>${arry.show.name}</p>
                        <p><i class="fa-solid fa-heart"></i> <span class='like'></span>likes</p>
                    </div>
                </div>
                <button id="comment" data-id = ${arry.show.id}>comments</button>
                <button id="reserve" data-id = ${arry.show.id}>reservations</button>
          `
    const list = document.createElement('li');
    list.setAttribute('data', arry.show.id)
    list.innerHTML = template
    wrapper.appendChild(list)
}

export default layout