
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDaY1waPKTivqfS-1ddZCDUzfuVKI5_UOc",
      authDomain: "classtest-d2a3f.firebaseapp.com",
      databaseURL: "https://classtest-d2a3f-default-rtdb.firebaseio.com",
      projectId: "classtest-d2a3f",
      storageBucket: "classtest-d2a3f.appspot.com",
      messagingSenderId: "619179018396",
      appId: "1:619179018396:web:2d2bbccd7ea8ae71580559"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
