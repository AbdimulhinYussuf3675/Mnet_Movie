const resLayout = (e, comsec) => {
  const temp = `${e.date_start} -${e.date_end}`;
  const per = document.createElement('li');
  per.innerHTML = temp;
  comsec.appendChild(per);
};

export default resLayout;