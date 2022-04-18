//YOUR FIREBASE LINKS
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
room_name=localStorage.getItem("room_name");

function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
