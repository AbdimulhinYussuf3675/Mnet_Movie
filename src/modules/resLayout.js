const resLayout = (e, comsec) => {
  const temp = `${e.date_start}  by ${e.username}`;
  const per = document.createElement('li');
  per.innerHTML = temp;
  comsec.appendChild(per);
};

export default resLayout;