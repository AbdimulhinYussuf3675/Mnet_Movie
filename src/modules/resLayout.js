const resLayout = (e,comsec) => {
    const temp = `${e.date_start} -${e.date_end}  by ${e.username }`
     const per = document.createElement('li')
     per.innerHTML = temp;
     comsec.appendChild(per)
}

export default resLayout