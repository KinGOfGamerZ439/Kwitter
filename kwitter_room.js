// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCU-jxvWouEYRdWGoEIbNZYBv5p5R4KyGc",
      authDomain: "kwitter-bc1a1.firebaseapp.com",
      projectId: "kwitter-bc1a1",
      storageBucket: "kwitter-bc1a1.appspot.com",
      messagingSenderId: "966814231345",
      appId: "1:966814231345:web:b667d7acf63f8126619e10"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
