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
function addUser(e) {
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

function getUser() {
  try {
    const snapshot = db.firestore().collection("users").get();
    const users = [];
    snapshot.forEach((doc) => {
      users.push({
        id: doc.id,
        data: doc.data()
      }
      )
    })
    return JSON.stringify({ db: users});
  }
  catch (error) {
    console.log(error);
    return null;
  }
}

function findUser(field, data){
  db.where(field, '==', data).get().then(snapshot => {   //Needs to be fixed
    var valid;
            if (snapshot.empty) {
                console.log('No matching documents.');
            }
            else {
                this.setState({email_error: "Email Exists"});  
            }
            valid = false;
        });
}

export default firebase;
module.export = {
  addUser,
  getUser
}