import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,updateProfile 
} from "firebase/auth";
import initializeAuthentication from "../Components/Firebase/firebase.init";
initializeAuthentication();

const useFirebase = () => {
  const [users, setUsers] = useState({});
  const [isLoading, setIsloding] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName]=useState("")
  const [isErr, setisErr]=useState(false)
  const auth = getAuth();
  const googleSignIn = () => {
    setIsloding(true);
    const googleProvider = new GoogleAuthProvider ();
    return signInWithPopup(auth, googleProvider)
      
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsloding(true);
      if (user) {
        setUsers(user);
      } else {
        setUsers({});
      }
      setIsloding(false);
    });
    return () => unsubscribe;
  }, []);

  const logOut = () => {
    setIsloding(false);
    setisErr(false)
    signOut(auth)
      .then(() => {})
      .finally(() => setIsloding(false));
  };

  //email password authentication

  const createUser = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then(
      (result) => {
        const user = result.user; 
        // console.log(user);
        updateProfile(auth.currentUser, {
            displayName: name,
           
          }).then(() => {
            
          }).catch((error) => {
            
          });
      }
    );
}; 
  const loginUser = (e) => {
    setisErr(false)
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user;
      setUsers(user)
      
    }).catch((error)=>{
        setisErr(true)
    });
  };
  

const nameHandle=(e)=>{
   setName(e.target.value)
}
  const emailHandle = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandle = (e) => {
    setPassword(e.target.value);
  };

  return {
    users,
    googleSignIn,
    logOut,
    isLoading, setUsers, setIsloding,
    loginUser,
    emailHandle,
    passwordHandle,
    createUser,nameHandle,isErr,setisErr
  };
};
export default useFirebase;
