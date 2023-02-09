const addcomment = (dataid, name, text) => {
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LiW5H2BeUCCme4OO04KP/comments',
    {
      method: 'post',
      body: JSON.stringify({
        item_id: dataid,
        username: name,
        comment: text,
      }),
      headers: { 'content-type': 'application/json' },
    })
    .then((resc) => resc.text());
};

export default addcomment;