const fetchlike = (e) => {
    const likes = async () => {
        const res = await fetch ('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8t6g73PoMQ4PoGggqL1h/likes');     
        const predata = res.json();
        return predata
    }
    likes().then((data)=> {
        data.map((dat,index)=> {
            // console.log(dat)
            if(e === dat.index){
                const like = document.querySelector('.like')
                like.innerText = dat.likes
            }
        })
    })
}

export default fetchlike