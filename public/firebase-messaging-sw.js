
importScripts("https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.6.1/firebase-messaging.js");
importScripts("https://www.gstatic.com/firebasejs/7.6.1/firebase-analytics.js");

firebase.initializeApp({
    messagingSenderId: "757163531547",
    apiKey: "AIzaSyAnjU1vOKfj-c5XG_6kaucVXvXLZHsed08",
    authDomain: "remind-mat.firebaseapp.com",
    databaseURL: "https://remind-mat.firebaseio.com",
    projectId: "remind-mat",
    storageBucket: "remind-mat.appspot.com",
    messagingSenderId: "757163531547",
    appId: "1:757163531547:web:e6683f22af8c16755687be"
  });

  //configuring messaging from firebase
const messaging = firebase.messaging();
console.log("asdf4")

messaging.setBackgroundMessageHandler(payload => {
    console.log(payload);
    // const notification = JSON.parse(payload.data.notification);
    // const notificationTitle = notification.title;
    // const notificationOptions = {
    //   body: notification.body
    // };
    // console.log("background notification Title " + notificationTitle);
    //Show the notification :)
    return self.registration.showNotification(
      "Have you remembered everything?",
      {}
    );
  });