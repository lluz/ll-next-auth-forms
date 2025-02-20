import Link from "next/link";

import { auth } from "@appLib/auth/auth";
import Profile from "@appComponents/profile";
import MainHeader from "@/components/header";

export default async function Page_MyAccount() {

  const session = await auth();

  return (<>

    <MainHeader />
    
    <hr />
    <hr />
    <hr />

    <h1>My ACCOUNT</h1>

    <ul>
      <li>
        <Link href="/"><u>Back</u></Link>
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
      <Profile />

  </>);

}
