var firebaseConfig = {
      apiKey: "AIzaSyB36hqeocdJKAvk-vJAG7pbU8QhvG0jeDM",
      authDomain: "kwitter-a3131.firebaseapp.com",
      databaseURL: "https://kwitter-a3131-default-rtdb.firebaseio.com",
      projectId: "kwitter-a3131",
      storageBucket: "kwitter-a3131.appspot.com",
      messagingSenderId: "916594458044",
      appId: "1:916594458044:web:b6f73e02fe230d09f93fb9"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
