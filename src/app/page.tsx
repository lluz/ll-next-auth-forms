import Link from "next/link";

// import MainHeader from "@/components/header";
// import Profile from "@appComponents/profile";

import MainHeaderClient from "@/components/header-client";
import ProfileClient from "@/components/profile-client";

export default function Home() {

  return (<>

    {/* <MainHeader /> */}
    <MainHeaderClient />  

    <hr />
    <hr />
    <hr />

    <h1>PUBLIC HOME</h1>

    <ul>
      <li>
        go to <Link href="/my-account"><u>my-account</u></Link>
      </li>
    </ul>
    
    {/* <Profile /> */}
    <ProfileClient />

  </>);

}
