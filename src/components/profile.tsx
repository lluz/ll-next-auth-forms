import { getSessionByCookie } from "@appLib/auth2";

export default async function Profile() {

  const session = await getSessionByCookie();
  
  if (session) {
    return (
      <>
      <hr />
      <hr />
        <div>Profile --- From server: {JSON.stringify(session)}</div>
      </>
    );
  }

  return (
    <>
      <hr />
      <hr />
      <div>Profile --- user is Signed Out</div>
    </>
  );

}
