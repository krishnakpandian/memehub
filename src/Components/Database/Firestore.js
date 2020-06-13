import * as firebase from 'firebase';
const settings = {timestampsInSnapshots: true};

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DATABASEURL,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID,
    measurementId: process.env.REACT_APP_MEASUREMENTID
  };

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings(settings);

const db = firebase.firestore();
const storage = firebase.storage();

export function addUser(e) {
  //e.preventDefault();

  db.settings({
    timestampsInSnapshots: true
  });
  const userRef = db.collection('users').add({
    fname: e.fname,
    lname: e.lname,
    email: e.email,
    username: e.username
    //created: firebase.timestamp.now()
  })
    .catch(error => console.error("Error: ", error))
};

export async function getUser() {
    const snapshot = await db.collection('users').get()
    const documents = [];
    snapshot.forEach(doc => {
       documents[doc.id] = doc.data();
       documents.length++;
    });

    return documents;
}

export async function findUser(field, data){
  console.log(field);
  console.log(data);
  const querySnapshot = await db.collection("users").where(field, "==", data).get();
  console.log(querySnapshot);
  const documents = [];
    querySnapshot.forEach(function(doc) {
        documents[doc.id] = doc.data();
        documents.length++;
        console.log(doc.id, " => ", doc.data());
    });
    console.log(documents);
    return documents;
}

export async function upload(image) {
  const upload = storage.ref(`images/${image.name}`).put(image);
    await upload.on(
      "state_changed",
      snapshot => {},
      error => {
        console.log(error);
      },
      async () => {
        await storage.ref("images").child(image.name).getDownloadURL();
      }
    );
}

export default firebase;