
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyB6BwezZbxMampVtj5IIG-djgTIMecvcLk",
      authDomain: "efriendbot-xkua.firebaseapp.com",
      databaseURL: "https://efriendbot-xkua-default-rtdb.firebaseio.com",
      projectId: "efriendbot-xkua",
      storageBucket: "efriendbot-xkua.appspot.com",
      messagingSenderId: "520780703868",
      appId: "1:520780703868:web:7d1ac5196195d17efac1f9",
      measurementId: "G-5GC3M2BH5Z"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="welcome " + user_name + "!";

  function addRoom()
  {
        room_name=document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              tanu:"my girlfriend"
        });
        localStorage.setItem("room_name",room_name);
        window.location="kwitter_page.html";
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name "+Room_names);
row="<div class='room_name'id="+Room_names+" onclick='redirect(this.id)'> #"+Room_names+" </div> <hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirect(name)
{
      console.log(name);
      localStorage.setItem("room_name",room_name);
        window.location="kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
      }