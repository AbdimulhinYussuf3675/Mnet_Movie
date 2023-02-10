const commentForm = () => {
  const pup = document.querySelector('.pup');
  pup.innerHTML += ` <div class="addcomment">
                <h4>Add comment</h4>
                <form>
                <input type="text" placeholder="your name" id="name">
                <textarea name="" id="text" cols="30" rows="10" placeholder="your view"></textarea>
                <button>submit</button>
              </form>
            </div>`;
};

export default commentForm;