const addLikes = (id) => {
    const add = async () => {
        const res = await fetch ('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8t6g73PoMQ4PoGggqL1h/likes',
         {
            method : 'post',
            body: JSON.stringify({item_id :id}),
            headers : {'content-type' : 'application/json'}
         });   
        const predata = res.text();
        return predata
    }
    add().then((data)=> console.log(data))
}

export default addLikes