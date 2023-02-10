const fetchlike = (ep) => {
  ep.forEach((e) => {
    const likes = async () => {
      const res = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8t6g73PoMQ4PoGggqL1h/likes');
      const predata = res.json();
      return predata;
    };
    likes().then((data) => {
      data.forEach((dat) => {
        if (parseInt(e.dataset.id, 10) === dat.item_id) {
          const like = e.querySelector('.like');
          like.innerText = dat.likes;
        }
      });
    });
  });
};

export default fetchlike;