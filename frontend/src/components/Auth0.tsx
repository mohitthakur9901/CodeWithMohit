import { useState } from 'react';
import MyButton from './Button';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from "react-icons/fa";

import { signInWithPopup } from 'firebase/auth';
import { auth, GoogleProvider, GithubProvider } from '../firebase/firebase_config';
import { GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';

const Auth0 = () => {
    const [loading, setLoading] = useState(false);

    const handleSignIn = () => {
        setLoading(true);
        signInWithPopup(auth, GoogleProvider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;
                console.log(token);

                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.error(errorCode, errorMessage, email, credential);
                // Handle errors and provide user feedback
                // Example: set an error state or display a toast message
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleSignInWithGitHub = () => {
        setLoading(true);
        signInWithPopup(auth, GithubProvider)
            .then((result) => {
                const credential = GithubAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;
                console.log(token);

                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GithubAuthProvider.credentialFromError(error);
                console.error(errorCode, errorMessage, email, credential);
               
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return (
        <div className="w-full  flex flex-col items-center">
            <MyButton
                type="button"
                size="md"
                children={<FcGoogle className="h-12 w-12" />}
                className="w-full md:w-3/4 rounded-md py-3 px-4 mt-2"
                onClick={handleSignIn}
                disabled={loading}
            />
            <MyButton
                type="button"
                size="md"
                children={<FaGithub className="h-10 w-10" />}
                className="w-full md:w-3/4 rounded-md py-3 px-5 mt-2 bg-black text-white"
                onClick={handleSignInWithGitHub}
                disabled={loading}
            />
        </div>
    );
};

export default Auth0;
