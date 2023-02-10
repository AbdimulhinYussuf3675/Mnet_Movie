const addReserve = (dataid,name,sDate, eDate) => {
 
    fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cXyK0mK0Ha1BkQqOi8Kz/reservations',
      {
          method: "post",
          body : JSON.stringify({
            
                item_id: dataid,
                username: name,
                date_start: sDate,
                date_end: eDate
            
          }),
          headers : {'content-type' : 'application/json'}
      })
      .then(resc=> resc.text())
      .then(data => console.log(data))
    }
  
  
  export default addReserve