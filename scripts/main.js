var data = JSON.parse(localStorage.getItem('sessionData'));

document.getElementById("myTrees").addEventListener("click", function() {
    location.replace("./trees.html");
  }, false);
  
document.getElementById("home").addEventListener("click", function() {
    location.replace("./main.html");
  }, false);

  document.getElementById("settings").addEventListener("click", function() {
    location.replace("./settings.html");
  }, false);

document.getElementById('usernameText').innerHTML = data.username;