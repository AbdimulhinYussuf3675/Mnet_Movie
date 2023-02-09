const reserveList = document.querySelector('.reserve-list');

const eachScore = (item, index) => {
    reserveList.innerHTML += `
    <li>
      <span>${index + 1} - ${item.sDate} -${item.eDate}</span> by
      <span>${item.user} points</span>
    </li>
  
  `;
};

const displayReserve = (object) => {
    reserveList.innerHTML = '';
  const scores = object.result;
//   scores.sort((a, b) => b.score - a.score);
  scores.forEach(eachScore);
};

export default displayReserve;