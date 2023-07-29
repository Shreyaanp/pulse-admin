import Layout from "@/component/Layout";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from 'next/router';

export default function Home() {
    const { data: session } = useSession();
    const router = useRouter();
    if(!session)
    {
        return (
            <div>
                <div className="flex justify-center items-center h-screen bg-gray-800 ">
                    <div className="text-center bg-gray-500 p-4 rounded-lg shadow-lg mb-3 ">
                        <h1 className="text-4xl font-bold text-white ">Welcome to the Pulse Fashion Ecommerce Store admin panel</h1>
                        <p className="text-xl font-semibold text-white mt-40 "> Please sign in to continue </p>
                        <button className="bg-blue-500 hover:bg-blue-700 mt-5 text-white font-bold py-2 px-4 rounded" onClick={() => signIn()}>Sign in</button>
                    </div>
                </div>
            </div>


        );
    }
    return (
        <Layout>
<div className="flex items-center
space-x-3
justify-between">

  <img src={session.user.image} className="rounded-full h-30 w-30" />
  <h1 className="text-4xl font-bold">Welcome, {session.user.name}</h1>
</div>


        </Layout>
    );
}
