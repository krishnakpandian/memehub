import * as firebase from 'firebase';
const config = require('./permissions.json');

const firebaseConfig = {
    apiKey: config.apiKey,
    authDomain: config.authDomain,
    databaseURL: config.databaseURL,
    projectId: config.projectId,
    storageBucket: config.storageBucket,
    messagingSenderId: config.messagingSenderId,
    appId: config.appId,
    measurementId: config.measurementId
  };

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings(settings);

export default firebase;