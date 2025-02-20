import Link from "next/link";

import { getSession } from "@appLib/auth2";

import MainHeader from "@/components/header";
import MainHeaderClient from "@/components/header-client";

import Profile from "@appComponents/profile";
import ProfileClient from "@/components/profile-client";

export default async function Page_MyAccount() {

  const session = await getSession();

  return (<>

    <MainHeader />
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

    {session?.user && (
    <div>
      USER logged in: {session.user.email} <br />
    </div>
    )}
    
    <hr />

    {session?.user ? (
      <div>{JSON.stringify(session.user)}</div>
    ) : (
      <div>Page_MyAccount - Signed Out ?????</div>
    )}

    <hr />

    <Profile />
    <ProfileClient />

  </>);

}
