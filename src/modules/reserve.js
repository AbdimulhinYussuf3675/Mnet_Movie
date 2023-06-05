const reserveForm = () => {
  const pup = document.querySelector('.pup');
  pup.innerHTML += ` <div class="addReserve">
                <h4 class="reserve-h4">Add Reservation</h4>
                <form class="res-form">
                <input type="text" placeholder="your name" id="name" >
                <input id="start-date" type="date" placeholder="start date"  />
                <input id="end-date" type="date" placeholder="end date" required />

                <button class="reserve-btn">submit</button>
              </form>
            </div>`;
};

export default reserveForm;