import Link from "next/link";

export default function Home() {

  return (<>

    <h1>PUBLIC HOME</h1>

    <ul>
      <li>
        <Link href="/my-account"><u>my-account</u></Link>
      </li>
    </ul>

  </>);

}
