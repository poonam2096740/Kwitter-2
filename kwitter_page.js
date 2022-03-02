//YOUR FIREBASE LINKS
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

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        console.log(firebase_message_id);
                        console.log(message_data);
                        fname = message_data['name'];
                        message = message_data['message'];
                        like = message_data['like'];
                        name_with_tag = "<h4> " + fname + "<img class='user-tick' src='tick.png'></h4>";
                        message_with_tag = "<h4 class='message_h4'> " + message + "</h4>";
                        like_with_tag = "<button class='btn btn-warning' id='"+firebase_message_id+"' value='"+like+"' onclick='updateLike(this.id)'>";
                        span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Likes:" + like + "</span></button> <hr>";
                        row = name_with_tag + message_with_tag + like_with_tag + span_with_tag;
                        document.getElementById("output").innerHTML += row;
                        //End code
                  }
            });
      });
}
getData();

function updateLike(message_id) {
      console.log("Click on like button -" + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updatedLikes = Number(likes) +1;
      console.log(updatedLikes);
      firebase.database().ref(room_name).child(message_id).update({
            like: updatedLikes
      });
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
