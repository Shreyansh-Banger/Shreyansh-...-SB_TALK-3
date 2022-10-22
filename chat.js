const firebaseConfig = {
    apiKey: "AIzaSyCY_8DiBBIn5Z7SoFms5YswD2kkXuJLceU",
    authDomain: "sb-chat-dfcc1.firebaseapp.com",
    databaseURL: "https://sb-chat-dfcc1-default-rtdb.firebaseio.com",
    projectId: "sb-chat-dfcc1",
    storageBucket: "sb-chat-dfcc1.appspot.com",
    messagingSenderId: "107672699779",
    appId: "1:107672699779:web:b6ae738cb76549d1eb2cb6"
  };


  const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



