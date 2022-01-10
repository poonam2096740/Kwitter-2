
//ADD YOUR FIREBASE LINKS

var firebaseConfig = {
    apiKey: "AIzaSyD0M4Af3uMhtmNQrwW6dkd3H4qcRM5HnzU",
    authDomain: "kwitter-f86f5.firebaseapp.com",
    databaseURL: "https://kwitter-f86f5-default-rtdb.firebaseio.com",
    projectId: "kwitter-f86f5",
    storageBucket: "kwitter-f86f5.appspot.com",
    messagingSenderId: "429600077182",
    appId: "1:429600077182:web:a1afabed68fac52b626f2f"
  };
  
firebase.initializeApp(firebaseConfig);
function addUser(){
    var user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}