import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Services/firebase";

const Auth = () => {
  const handleGoogleSignup = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const provider = await new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  return (
    <div className="h-screen w-screen bg-indigo-500">
      <button type="button" className="p-5 bg-red-200" onClick={handleGoogleSignup}>
        Sign in
      </button>
    </div>
  );
};

export default Auth;
