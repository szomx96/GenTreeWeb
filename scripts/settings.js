import * as api from './api.js';

var data = JSON.parse(localStorage.getItem('sessionData'));

document.addEventListener('DOMContentLoaded', function() {
  getUserInfo();
}, false);

document.getElementById("changeAvatar").addEventListener('click', function(){
    console.log("changeavatar clicked");
}, false);

function getUserInfo(){

    api.getUserAvatar(data.id)
    .then(response => {

        console.log(response.content);
        //changeAvatar(response);
    });   
}

function changeAvatar(response){
    document.getElementById("avatar").src = response.content;
    
}