import * as api from './api.js';

var data = JSON.parse(localStorage.getItem('sessionData'));

document.addEventListener('DOMContentLoaded', function() {
  getUserInfo();
}, false);

document.getElementById("changeAvatar").addEventListener('click', function(){
    updateAvatar();
}, false);

function getUserInfo(){

    console.log(api.getAvatar(data.id));

    api.getAvatar(data.id)
    .then(response => {
        console.log(response);
        loadAvatar(response.url);
    });   
}

function loadAvatar(url){        
    document.getElementById("avatar").src = url;    
}


function uploadAvatar(file){

    var formData = new FormData();
    formData.append("filename", file);
    
    api.postMedia(formData)
            .then(response => {
                console.log(response);
            });
}


document.getElementById('avatarInput').onchange = function (evt) {
    var tgt = evt.target || window.event.srcElement,
        files = tgt.files;

    if (FileReader && files && files.length) {
        var fr = new FileReader();
        fr.onload = function () {
            document.getElementById("avatar").src = fr.result;

            console.log(fr.result);
            
            uploadAvatar(fr.result);
        }
        fr.readAsDataURL(files[0]);
    }
}