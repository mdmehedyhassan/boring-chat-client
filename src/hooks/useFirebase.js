import { firebaseInitialize } from "../Firebase/firebase.init";

import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";


firebaseInitialize();
const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
        });
        return () => unsubscribe;
    },[auth])
    

    const googleSignInHandler = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result);
            }).catch((error) => {
                console.log(error);
            });
    };

    const logoutHandler = () => {
        signOut(auth).then(() => {
            setUser({});
            alert("Log Out Success")
        }).catch((error) => {
        });
    }

    return {
        user,
        googleSignInHandler,
        logoutHandler
    };
};

export default useFirebase;