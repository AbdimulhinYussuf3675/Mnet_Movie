const listlayout = (e, comsec) => {
  const temp = `${e.comment}`;
  const per = document.createElement('li');
  per.innerHTML = temp;
  comsec.appendChild(per);
};

export default listlayout;