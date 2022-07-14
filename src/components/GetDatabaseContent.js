// Import resources
import { useEffect, useRef } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { useSession } from "next-auth/react";

// Import custom files
import { appSettingsAtom, userAtom, allUsersAtom } from "../recoil/atoms";
import {
  fireDB,
  collection,
  onSnapshot,
  collectionGroup,
  doc,
  query,
  where,
  orderBy,
} from "../config/firebase";

// Component
export default function GetDatabaseContent() {
  // Define isMounted
  const isMounted = useRef(null);

  // Define session
  const session = useSession();
  const currUserID = session?.data?.user?.userID;

  // Define atom
  const setAppSettingsAtom = useSetRecoilState(appSettingsAtom);
  const setUserAtom = useSetRecoilState(userAtom);
  const setAllUsersAtom = useSetRecoilState(allUsersAtom);

  // Debug
  //console.log("Debug getDatabaseContent: ", !currUserID);

  // SIDE EFFECTS
  // HANDLE SET USER ATOM
  useEffect(() => {
    // On mount
    isMounted.current = true;
    // IIFE
    (() => {
      // If currUserID
      if (currUserID) {
        //setUserAtom(session?.data?.user);
        const currUserRef = doc(fireDB, "users", `${currUserID}`);
        // Snapshot
        onSnapshot(currUserRef, (snapshot) => {
          // Set atom
          setUserAtom(snapshot.data());
        });
      } else {
        setUserAtom(null);
      } // close if currUserID
    })(); // close fxn
    // Clean up
    return () => (isMounted.current = false);
  }, [currUserID, setUserAtom]);

  // SIDE EFFECTS
  // API CALLS
  // useEffect(() => {
  //   // On mount
  //   isMounted.current = true;
  //   // IIFE
  //   (async () => {
  //     // Debug
  //     //console.log("Debug getDatabaseContentAPI: ", getPaystackBanks);
  //   })(); // close fxn
  //   // Clean up
  //   return () => (isMounted.current = false);
  // }, []);

  // SIDE EFFECTS
  // LISTEN TO DATABASE
  useEffect(() => {
    // On mount
    isMounted.current = true;
    // LISTEN TO APP SETTINGS
    const appSettingsRef = collection(fireDB, "appSettings");
    // Snapshot
    onSnapshot(appSettingsRef, (snapshot) => {
      // Set atom
      setAppSettingsAtom(
        snapshot.docs.map((doc) => {
          return { id: doc.id, data: doc.data() };
        })
      );
    });

    // LISTEN TO ALL USERS
    const allUsersRef = collection(fireDB, "users");
    // Snapshot
    onSnapshot(allUsersRef, (snapshot) => {
      // Set atom
      setAllUsersAtom(
        snapshot.docs.map((doc) => {
          return doc.data();
        })
      );
    });

    // Debug
    //console.log("Debug getDatabaseContent: ",);
    // Clean up
    return () => (isMounted.current = false);
  }, [currUserID, setAppSettingsAtom, setAllUsersAtom]);

  // Return component
  return null;
} // close component
