var data = JSON.parse(localStorage.getItem('sessionData'));

document.addEventListener('DOMContentLoaded', function() {
  getTrees();
}, false);

//console.log(JSON.stringify(data));
//console.log(getTrees());

function getTrees(){

    console.log("get trees called");

    var url = 'https://gentreeappapi.azurewebsites.net/api/trees';
    var status;

    fetch(url, {
        method: 'GET',
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${data.token}`
        }
      })
      .then(res => { 
        status = res.status;
        return res.json()
      })
      .then(response => {
        //console.log('Success:', JSON.stringify(response));
        displayList(JSON.stringify(response));      
      })
      .catch(error => console.error('Error:', error));
}

function displayList(response){

  console.log("display list" + response);
}