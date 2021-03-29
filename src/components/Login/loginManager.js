import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

// firebase.initializeApp(firebaseConfig);
export const intializeLoginFramework = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }else {
        firebase.app(); // if already initialized, use that one
    }
}

export const handleGoogleSignIn = () => {
    // console.log('Signin')
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
    .then(res => {
        const {displayName, email, photoURL} = res.user;
        const signedInUser = {
        isSignedIn: true,
        name: displayName,
        email: email,
        photo: photoURL,
        success: true
        }
        return signedInUser;
        // setLoggedInUser(signedInUser);
        // history.replace(from);
    })
    .catch(err => {
        console.log(err);
        console.log(err.message);
    })
}


export const handleFbSignIn = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth()
    .signInWithPopup(fbProvider).then((result) => {
        var credential = result.credential;

        var user = result.user;
        user.success = true;
        return user;
        var accessToken = credential.accessToken;

        // console.log('FB user after signin', user);

    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
    });

}

export const handleSignOut = () => {
    return firebase.auth().signOut()
    .then(res => {
      const signedOutUser = {
        isSignedIn: false,
        name: '',
        email: '',
        phone: '',
      }
      return signedOutUser;
      console.log(res);
    })
    .catch( err => {
      //  an error happend
    })
}

export const createUserWithEmailAndPassword = (name, email, password) => {
    // firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(res => {
        const newUserInfo = res.user;
        newUserInfo.error = '';
        newUserInfo.success = true;
        updateUserName(name);
        return newUserInfo;
    //   console.log(res);

    //   setUser(newUserInfo);
    //   setLoggedInUser(newUserInfo);
    })
    .catch((error) => {
      const newUserInfo = {};
      newUserInfo.error = error.message;
      newUserInfo.success = false;
      return newUserInfo;
    //   setUser(newUserInfo);
    });
}


export const signInWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then(res => {
        const newUserInfo = res.user;
        newUserInfo.error = '';
        newUserInfo.success = true;
        return newUserInfo;
        // console.log('Sign in user info', res.user)
      })
      .catch((error) => {
        const newUserInfo = {};
        newUserInfo.error = error.message;
        newUserInfo.success = false;
        return newUserInfo;
      });
}


const updateUserName = name => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name,
    }).then(function() {
      console.log('User name updated successfully')
    }).catch(function(error) {
      console.log(error)
    });
  }