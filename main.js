var dupa = JSON.parse(localStorage.getItem('sessionData'));

console.log(JSON.stringify(dupa));
console.log(utkajDupe());

document.getElementById('usernameText').innerHTML = dupa.username;


function utkajDupe(){
    var url = 'https://gentreeappapi.azurewebsites.net/api/trees';
    var status;

    fetch(url, {
        method: 'GET',
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${dupa.token}`
        }
      }).then(res => {status = res.status; return res.json()})
      .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.error('Error:', error));
}