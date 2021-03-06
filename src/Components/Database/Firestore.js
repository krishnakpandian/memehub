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
  const userRef = db.collection('users').add(e)
    .catch(error => console.error("Error: ", error))
  return userRef;
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

export async function upload(image, username) {
  const metadata = {
    customMetadata : {
    'user': username
    }
  };
  const upload = storage.ref(`images/${image.name}`).put(image, metadata);
    await upload.on(
      "state_changed",
      snapshot => {},
      error => {
        console.log(error);
      },
      async () => {
        let imageURL;
        await storage.ref("images").child(image.name).getDownloadURL().then(function(url) {
          console.log(url);
          imageURL = url;
        }).catch(function(error) {
          console.log(error);
        });;
        const query = await db.collection("users").where('username', "==", username).get();
        const snapshot = query.docs[0];
        const ref = snapshot.ref;
        ref.update({
          imageURLs: firebase.firestore.FieldValue.arrayUnion(imageURL),
          memeCount: firebase.firestore.FieldValue.increment(1)
        });
      }
    );
}

export async function getImages() {
  // create reference to image folder in storage
  const imagesRef = storage.ref("images");
  const documents = [];
  

  // get the references of individual images, then loop through and add to array
  await imagesRef.listAll().then( async function(result) {
    for (let i = 0; i < result.items.length; i++) {
        let imageRef = result.items[i];
        await imageRef.getDownloadURL().then(function(url) {
          console.log(url);
          documents.push(url);
        }).catch(function(error) {
          console.log(error);
        });
    }
  }).catch(function(error) {
    console.log(error);
  });

  console.log(documents);
  console.log("getImages finito");
  return documents;
   
}
// add is 1,2,3
// 1 means delete all fields and replace all fields with new fields
// 2 means just add additional fields to the current object
// 3 means change fields that exist already

export async function updateUser(user, data, modify){
  
  //await admin.firestore().collection('users').doc(user).update(data);

}



export default firebase;