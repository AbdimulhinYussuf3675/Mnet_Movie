const moviecount = (section) => {
    const num = document.querySelector('.total');
    const items = Array.from(section.children);
    num.innerText = items.length;
    return items
}

export default moviecount