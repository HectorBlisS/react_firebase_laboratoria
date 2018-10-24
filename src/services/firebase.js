  import * as firebase from 'firebase'

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyCF2ZZ2fYz9knhpiF1Qd81ebj4DpKbpQvA",
    authDomain: "ironhackdemo.firebaseapp.com",
    databaseURL: "https://ironhackdemo.firebaseio.com",
    projectId: "ironhackdemo",
    storageBucket: "ironhackdemo.appspot.com",
    messagingSenderId: "987657664062"
  };
  firebase.initializeApp(config);

  //inicializamos firestore
  const db = firebase.firestore()

  export default firebase

  //hacer login con gMail
  export const gLogin = () => {
      const provider = new firebase.auth.GoogleAuthProvider()
      return firebase.auth().signInWithPopup(provider)
      .then(res=>{
          createUser(res.user)
          localStorage.setItem('user', true)
          return
      })
  } // servicio

  const createUser = (user) => {
    const labRef = db.collection("labUsers")
    const u = {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL
    }
    return labRef.doc(u.uid).set(u)
    .then(doc=>{
        console.log(doc)
    })
  }

  //guardar orden

  