// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker
// Note: This matches the config in storage.ts. 
// If using environment variables, these will need to be replaced with actual values during build or manually.
firebase.initializeApp({
  apiKey: "AIzaSyDuxT03D9vxSWE5Fw29sdsnCohTtGj32fo",
  authDomain: "ipreu-95300.firebaseapp.com",
  projectId: "ipreu-95300",
  storageBucket: "ipreu-95300.firebasestorage.app",
  messagingSenderId: "921313347665",
  appId: "1:921313347665:web:128cdbb3e428b113a71070"
});

const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/ipreu-logo-hd.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
