import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/react';

// Your login component
const LoginPage = () => {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    // If there's a valid session (user is signed in), redirect to the /home page
    if (session) {
      router.push('/home');
    }
  }, [session, router]);

  // Function to handle sign-in
  const handleSignIn = async () => {
    // You can use the signIn method from NextAuth.js to initiate the sign-in process
    await signIn('google'); // Replace 'your_authentication_provider' with the name of your authentication provider configured in NextAuth.js
  };

  return (
    <div>
      {/* Your login form or UI */}
      <div className="flex justify-center items-center h-screen bg-gray-800 "> <div className="text-center bg-gray-500 p-4 rounded-lg shadow-lg mb-3 "> <h1 className="text-4xl font-bold text-white ">Welcome to the NextJS Ecommerce Store</h1> <p className="text-xl font-semibold text-white mt-40 "> Please sign in to continue </p> <button className="bg-blue-500 hover:bg-blue-700 mt-5 text-white font-bold py-2 px-4 rounded" onClick={handleSignIn}>Sign in</button> </div> </div>
    </div>
  );
};

export default LoginPage;
