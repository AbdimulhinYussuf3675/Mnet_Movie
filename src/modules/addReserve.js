import res from './resApi.js';

// window.onload = getScore();

const resForm = document.getElementById('res-form');
const userName = document.getElementById('name');
const startDate = document.getElementById('start-date');
const endDate = document.getElementById('end-date');



resForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = userName.value;
    const sDate = startDate.value;
    const eDate = endDate.value;
    console.log(eDate, sDate)

    postReserve (name, sDate, eDate );
    // inputForm.reset();
  });


const postReserve = async (name, sDate, eDate) => {
  await fetch(
    res,
    {
      method: 'POST',
      body: JSON.stringify({
        item_id: 'item1',
        user: name,
        sDate,
        eDate,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  )
    .then((response) => response.json())
    // .then(() => getScore());
};


const showReserve = async (id) => {
    const response = await fetch(
        url,
      )
      .then((response) => response.json())
      .then((json) => displayReserve(json));
    };
  
  export default showReserve;

// export default postReserve;
// export { showReserve, postReserve}