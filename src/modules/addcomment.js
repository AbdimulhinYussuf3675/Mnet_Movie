const addcomment = (dataid,name,text) => {
 
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LiW5H2BeUCCme4OO04KP/comments',
    {
        method: "post",
        body : JSON.stringify({
            item_id : dataid,
            username: name,
            comment :text
        }),
        headers : {'content-type' : 'application/json'}
    })
    .then(resc=> resc.text())
    .then(data => console.log(data))
  }


export default addcomment