const firebaseConfig = {
    apiKey: "AIzaSyC9x2dMZzfMyCF1grxjKRDbtaGakWqrxG4",
    authDomain: "chatter-cha.firebaseapp.com",
    databaseURL: "https://chatter-cha-default-rtdb.firebaseio.com",
    projectId: "chatter-cha",
    storageBucket: "chatter-cha.appspot.com",
    messagingSenderId: "269480653417",
    appId: "1:269480653417:web:2e0157a58971beb811e8f8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var username = localStorage.getItem("username");
  var room_name = localStorage.getItem("room_name");
  function send() {
    var msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:username,
        message:msg,
        like:0
    });
  }