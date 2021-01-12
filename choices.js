// Your web app's Firebase configuration
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

  function logout() {
    window.location = "index.html"
  }
  function printName() {
    var name = localStorage.getItem("username");
    document.getElementById("name").innerHTML = name
  }
  function addRoom() {
    var room = document.getElementById("room_input").value;
    localStorage.setItem("room_name", room);
    firebase.database().ref("/").child(name).update({
      purpose: "adding room"
    });
    window.location = "chat_page.html";
  }
  function getData() {firebase.database().ref("/").on('value',
  function(snapshot) {document.getElementById("output").innerHTML =
  "";snapshot.forEach(function(childSnapshot) {childKey =
  childSnapshot.key;
  var Room_names = childKey;
  //Start code
    console.log("Room Name - " + Room_names);
    var row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div>";
    document.getElementById("rooms").innerHTML = row;
    function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "chat_page.html";
    }
  //End code
  });});}
getData();