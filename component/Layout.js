import Nav from "@/component/Navigation";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Layout({ children }) {
  const { data: session } = useSession();
  if (!session) {
    return (
<>
Not signed in <br />
<button onClick={() => signIn()}>Sign in</button>

</>
    );
  }
  return (
    <div className="flex bg-gray-800">
      <div
        className="relative
        h-screen
    bg-gray-800
    w-1/5
    text-white
    "
      >
        <Nav />
      </div>
      <div
        className="

    w-4/5
    bg-white
    p-4
    mr-4
    mt-2
    rounded-lg
    shadow-lg
    mb-3


    "
      >
        <div className="flex  ">
            {children   }
        </div>
      </div>
    </div>
  );
}
