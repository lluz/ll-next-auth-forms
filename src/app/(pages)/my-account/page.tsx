import Link from "next/link";

import { authClient } from "@/lib/auth2/auth-client" // import the auth client

// import MainHeader from "@/components/header";
// import Profile from "@appComponents/profile";

import MainHeaderClient from "@/components/header-client";
import ProfileClient from "@/components/profile-client";

export default async function Page_MyAccount() {

 
  const { data: session, error } = await authClient.getSession();

  return (<>

    {/* <MainHeader /> */}
    <MainHeaderClient />
    
    <hr />
    <hr />
    <hr />

    <h1>My ACCOUNT</h1>

    <ul>
      <li>
      go to <Link href="/"><u>HOME</u></Link>
      </li>
    </ul>

    <hr />

    {session?.user ? (
      <div>
        USER logged in: {session.user.email} <br />
      </div>
      ) : null}
      
      <hr />

      {session?.user ? (
        <div>{JSON.stringify(session.user)}</div>
      ) : (
        <div>Signed Out</div>
      )}

      <hr />

      {/* <Profile /> */}
      <ProfileClient />

  </>);

}
