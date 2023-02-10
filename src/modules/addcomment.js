const addcomment = (dataid, name, text) => {
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cXyK0mK0Ha1BkQqOi8Kz/comments',
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