import * as api from './api.js';

var data = JSON.parse(localStorage.getItem('sessionData'));

document.addEventListener('DOMContentLoaded', function() {
  getUserInfo();
}, false);


function getUserInfo(){

    api.getAvatar(data.id)
    .then(response => {
        loadAvatar(response.url);
    });   
}

function loadAvatar(url){        
    document.getElementById("avatar").src = url;    
}

async function uploadAvatar(file) {

    var fileInput = document.getElementById('avatarInput');
    var file = fileInput.files[0];
    var formData = new FormData();
    formData.append("file", file);

    var mediaID = await api.postMedia(formData).then(response => response.id);
    var newAvatar = {
        userId: data.id,
        mediaId: mediaID
    }
    await api.addUserAvatar(newAvatar);
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