import MainHeader from "@appComponents/header";
import Link from "next/link";

export default function Home() {

  return (<>

    <MainHeader />

    <hr />
    <hr />
    <hr />

    <h1>PUBLIC HOME</h1>

    <ul>
      <li>
        go to <Link href="/my-account"><u>my-account</u></Link>
      </li>
    </ul>

  </>);

}
