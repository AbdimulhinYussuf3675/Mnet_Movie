const addcomment = (dataid, name, text) => {
  const add = async () => {
    const res = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cXyK0mK0Ha1BkQqOi8Kz/comments',
      {
        method: 'post',
        body: JSON.stringify({
          item_id: dataid,
          username: name,
          comment: text,
        }),
        headers: { 'content-type': 'application/json' },
      });
    const data = await res.text();
    return data;
  };
  add();
};

export default addcomment;