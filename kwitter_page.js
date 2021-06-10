var firebaseConfig = {
    apiKey: "AIzaSyBxDZVGNOB-gdwyQdAQUJN-F8MrUw5YvL0",
    authDomain: "lets-chat-app-91371.firebaseapp.com",
    databaseURL: "https://lets-chat-app-91371-default-rtdb.firebaseio.com",
    projectId: "lets-chat-app-91371",
    storageBucket: "lets-chat-app-91371.appspot.com",
    messagingSenderId: "324739021891",
    appId: "1:324739021891:web:1cc28a4084b3c5f64968f6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
  user_name= localStorage.getItem("user_name");
  room_name= localStorage.getItem("room_name");

  function send()
  {
      msg= document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name: user_name,
          message: msg,
          like: 0
      });
      document.getElementById("msg").value=" ";
  }