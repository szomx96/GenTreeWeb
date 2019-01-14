var url = "'https://gentreeappapi.azurewebsites.net/api/";
var data = JSON.parse(localStorage.getItem('sessionData'));

function media(id, method) { //GET, DELETE

    var status;
    var url = url + `media/${id}`;

    fetch(url, {
        method: method.toUpperCase(),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${data.token}`
        }
    })
        .then(res => {
            status = res.status;
            return res.json()
        })
        .then(response => {
            if (status == 200) {
                console.log('Success:', JSON.stringify(response));
                return response;
            } else {
                return status;
            }
        })
        .catch(error => console.error('Error:', error));
}

function postMedia(body) {

    var url = url + "media";

    fetch(url, {
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${data.token}`
        }
    }).then(res => {
        status = res.status; return res.json()
    }).then(response => {
        console.log('Success:', JSON.stringify(response));
        if (status == 200) {
            return response.id;
        } else {
            return status;
        }
    }).catch(error => console.error('Error:', error));
}

function person(id, method) { //GET, DELETE

    var status;
    var url = url + `persons/${id}`;

    fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${data.token}`
        }
    })
        .then(res => {
            status = res.status;
            return res.json()
        })
        .then(response => {
            if (status == 200) {
                console.log('Success:', JSON.stringify(response));
                return response;
            } else {
                return status;
            }
        })
        .catch(error => console.error('Error:', error));
}

function getPersonMedia(id){

    var url = url + `persons/${id}/media`;
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
        console.log('Success:', JSON.stringify(response));      
      })
      .catch(error => console.error('Error:', error));
}

function postPersonMedia(id, body) {

    var status;
    var url = url + `persons/${id}/media`;

    fetch(url, {
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${data.token}`
        }
    }).then(res => {
        status = res.status; return res.json()
    }).then(response => {
        console.log('Success:', JSON.stringify(response));
        if (status == 200) {
            return response;
        } else {
            return status;
        }
    }).catch(error => console.error('Error:', error));
}

function getPersonAvatar(id){

    var url = url + `persons/${id}/media/avatar`;
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
        console.log('Success:', JSON.stringify(response));      
      })
      .catch(error => console.error('Error:', error));
}

function getPersonEvents(id){

    var url = url + `persons/${id}/events`;
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
        console.log('Success:', JSON.stringify(response));      
      })
      .catch(error => console.error('Error:', error));
}

function postPersonEvents(id, body){

    var url = url + `persons/${id}/events`;
    var status;

    fetch(url, {
        method: 'POST',
        body: body,
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
        console.log('Success:', JSON.stringify(response));      
      })
      .catch(error => console.error('Error:', error));
}

function getPersonComments(id){

    var url = url + `persons/${id}/comments`;
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
        if (status == 200) {
            console.log('Success:', JSON.stringify(response));
            return response;
        } else {
            return status;
        }    
      })
      .catch(error => console.error('Error:', error));
}

function postPersonComments(id,body){

    var url = url + `persons/${id}/comments`;
    var status;

    fetch(url, {
        method: 'GET',
        body: body,
        headers:{
          'Content-Type': 'application/json',          
          'Authorization': `Bearer ${data.token}`,
        }
      })
      .then(res => { 
        status = res.status;
        return res.json()
      })
      .then(response => {
        if (status == 200) {
            console.log('Success:', JSON.stringify(response));
            return response.id;
        } else {
            return status;
        }    
      })
      .catch(error => console.error('Error:', error));
}

function getPersonRelations(id){

    var url = url + `persons/${id}/relations`;
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
        if (status == 200) {
            console.log('Success:', JSON.stringify(response));
            return response;
        } else {
            return status;
        }    
      })
      .catch(error => console.error('Error:', error));
}

function postPerson(idTree, body){

    var url = url + `persons/${idTree}/events`;
    var status;

    fetch(url, {
        method: 'POST',
        body: body,
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
        if (status == 201) {
            console.log('Success:', JSON.stringify(response));
            return response;
        } else {
            return status;
        }  
      })
      .catch(error => console.error('Error:', error));
}
function changePersonAvatar(idPerson, idAvatar){

    var url = url + `persons/${idPerson}/media/${idAvatar}/avatar`;
    var status;

    fetch(url, {
        method: 'PUT',
 
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
        if (status == 200) {
            console.log('Success:', JSON.stringify(response));
            return response;
        } else {
            return status;
        }  
      })
      .catch(error => console.error('Error:', error));
}

function postPersonRelations(body){

    var url = url + `persons/relations`;
    var status;

    fetch(url, {
        method: 'POST',
        body: body,
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
        if (status == 201) {
            console.log('Success:', JSON.stringify(response));
            return response;
        } else {
            return status;
        }  
      })
      .catch(error => console.error('Error:', error));
}
function postTree( body){

    var url = url + `trees`;
    var status;

    fetch(url, {
        method: 'POST',
        body: body,
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
        if (status == 201) {
            console.log('Success:', JSON.stringify(response));
            return response;
        } else {
            return status;
        }  
      })
      .catch(error => console.error('Error:', error));
}


function getTreeById(id){

    var url = url + `trees/${id}`;
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
        if (status == 200) {
            console.log('Success:', JSON.stringify(response));
            return response;
        } else {
            return status;
        }  
      })
      .catch(error => console.error('Error:', error));
}

function deleteTreeById(id){

    var url = url + `trees/${id}`;
    var status;

    fetch(url, {
        method: 'DELETE',
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${data.token}`
        }
      })
      .then(res => { 
        status = res.status;
        return status;
      })
      .catch(error => console.error('Error:', error));
}




function getUserTrees(id){

    var url = url + `trees/user/${id}`;
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
        if (status == 200) {
            console.log('Success:', JSON.stringify(response));
            return response;
        } else {
            return status;
        }  
      })
      .catch(error => console.error('Error:', error));
}

function getPersonsFromTree(id){

    var url = url + `trees/${id}/persons`;
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
        if (status == 200) {
            console.log('Success:', JSON.stringify(response));
            return response;
        } else {
            return status;
        }  
      })
      .catch(error => console.error('Error:', error));
}
function addTreeOwner(treeId,userId){

    var url = url + `trees/${treeId}/users/${userId}`;
    var status;

    fetch(url, {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${data.token}`
        }
      })
      .then(res => { 
        status = res.status;
        return status;
      })
      .catch(error => console.error('Error:', error));
}



function getUserAvatar(id){

    var url = url + `users/${id}/avatar`;
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
        if (status == 200) {
            console.log('Success:', JSON.stringify(response));
            return response;
        } else {
            return status;
        }  
      })
      .catch(error => console.error('Error:', error));
}

function addUserAvatar(body){

    var url = url + `users/avatar`;
    var status;

    fetch(url, {
        method: 'POST',
        body: body,
        headers:{
          'Content-Type': 'application/json',          
          'Authorization': `Bearer ${data.token}`,
        }
      })
      .then(res => { 
        status = res.status;
        return status;
      })
      .catch(error => console.error('Error:', error));
}