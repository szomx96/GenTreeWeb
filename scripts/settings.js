import * as api from './api.js';

var data = JSON.parse(localStorage.getItem('sessionData'));

document.addEventListener('DOMContentLoaded', function() {
  getUserInfo();
}, false);

document.getElementById("changeAvatar").addEventListener('click', function(){
    updateAvatar();
}, false);

function getUserInfo(){

    console.log(api.getUserAvatar(data.id));

    api.getUserAvatar(data.id)
    .then(response => {
        console.log(response);
        loadAvatar(response.content);
    });   
}

function loadAvatar(response){      
    document.getElementById("avatar").src = `data:image/png;base64,${response}`;    
}

function updateAvatar(){
    // var fileVal=document.getElementById("avatarInput");
    // alert(fileVal.value);
    // document.getElementById("avatar").src = fileVal;

}

function uploadAvatar(body){
    console.log("body:", body);
    api.postMedia(body)
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
            uploadAvatar(fr.result);
        }
        fr.readAsDataURL(files[0]);
    }
}