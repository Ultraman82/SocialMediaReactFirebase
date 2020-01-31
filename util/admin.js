const admin = require("firebase-admin");
const serviceAccount = require("../serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://social-media-69847.firebaseio.com",
  storageBucket: "social-media-69847.appspot.com"
});

const db = admin.firestore();

module.exports = { admin, db };

/* service firebase.storage {
    match /b/{bucket}/o {
      match /{allPaths=**} {
        allow read, write: if request.auth != null;
      }
    }
  } */
