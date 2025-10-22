importScripts('https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/12.4.0/firebase-messaging.js');

const firebaseConfig = {
  messagingSenderId: "443499005463",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
