var url = "'https://gentreeappapi.azurewebsites.net/api/";
//var data = JSON.parse(localStorage.getItem('sessionData'));

export function media(id, method) { //GET, DELETE

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

export function postMedia(body) {

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

export function person(id, method) { //GET, DELETE

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

export function getPersonMedia(id) {

    var url = url + `persons/${id}/media`;
    var status;

    fetch(url, {
        method: 'GET',
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
            console.log('Success:', JSON.stringify(response));
        })
        .catch(error => console.error('Error:', error));
}

export function postPersonMedia(id, body) {

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

export function getPersonAvatar(id) {

    var url = url + `persons/${id}/media/avatar`;
    var status;

    fetch(url, {
        method: 'GET',
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
            console.log('Success:', JSON.stringify(response));
        })
        .catch(error => console.error('Error:', error));
}

export function getPersonEvents(id) {

    var url = url + `persons/${id}/events`;
    var status;

    fetch(url, {
        method: 'GET',
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
            console.log('Success:', JSON.stringify(response));
        })
        .catch(error => console.error('Error:', error));
}

export function postPersonEvents(id, body) {

    var url = url + `persons/${id}/events`;
    var status;

    fetch(url, {
        method: 'POST',
        body: body,
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
            console.log('Success:', JSON.stringify(response));
        })
        .catch(error => console.error('Error:', error));
}

export function getPersonComments(id) {

    var url = url + `persons/${id}/comments`;
    var status;

    fetch(url, {
        method: 'GET',
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

export function postPersonComments(id, body) {

    var url = url + `persons/${id}/comments`;
    var status;

    fetch(url, {
        method: 'GET',
        body: body,
        headers: {
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

export function getPersonRelations(id) {

    var url = url + `persons/${id}/relations`;
    var status;

    fetch(url, {
        method: 'GET',
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

export function postPerson(idTree, body) {

    var url = url + `persons/${idTree}/events`;
    var status;

    fetch(url, {
        method: 'POST',
        body: body,
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
            if (status == 201) {
                console.log('Success:', JSON.stringify(response));
                return response;
            } else {
                return status;
            }
        })
        .catch(error => console.error('Error:', error));
}

export function changePersonAvatar(idPerson, idAvatar) {

    var url = url + `persons/${idPerson}/media/${idAvatar}/avatar`;
    var status;

    fetch(url, {
        method: 'PUT',

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

export function postPersonRelations(body) {

    var url = url + `persons/relations`;
    var status;

    fetch(url, {
        method: 'POST',
        body: body,
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
            if (status == 201) {
                console.log('Success:', JSON.stringify(response));
                return response;
            } else {
                return status;
            }
        })
        .catch(error => console.error('Error:', error));
}

export function postTree(body) {

    var url = url + `trees`;
    var status;

    fetch(url, {
        method: 'POST',
        body: body,
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
            if (status == 201) {
                console.log('Success:', JSON.stringify(response));
                return response;
            } else {
                return status;
            }
        })
        .catch(error => console.error('Error:', error));
}

export function getTreeById(id) {

    var url = url + `trees/${id}`;
    var status;

    fetch(url, {
        method: 'GET',
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

export function deleteTreeById(id) {

    var url = url + `trees/${id}`;
    var status;

    fetch(url, {
        method: 'DELETE',
        headers: {
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

export function getUserTrees(id) {

    var url = url + `trees/user/${id}`;
    var status;

    fetch(url, {
        method: 'GET',
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

export function getPersonsFromTree(id) {

    var url = url + `trees/${id}/persons`;
    var status;

    fetch(url, {
        method: 'GET',
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

export function addTreeOwner(treeId, userId) {

    var url = url + `trees/${treeId}/users/${userId}`;
    var status;

    fetch(url, {
        method: 'POST',
        headers: {
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

export function getUserAvatar(id) {

    var url = url + `users/${id}/avatar`;
    var status;

    fetch(url, {
        method: 'GET',
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

export function addUserAvatar(body) {

    var url = url + `users/avatar`;
    var status;

    fetch(url, {
        method: 'POST',
        body: body,
        headers: {
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

export function postLogin(name, password) {
    var url = 'https://gentreeappapi.azurewebsites.net/api/users/auth';
    var data = { name: name, password: password };
    var status;

    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export function test(xd) {
    console.log("test sie wywowal");

}