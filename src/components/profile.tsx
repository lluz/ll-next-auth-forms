import { getSession } from "@appLib/auth2";

export default async function Profile() {

  const session = await getSession();
  
  if (session?.user) {
    return (
      <>
      <hr />
      <hr />
        <div>Profile --- From client: {JSON.stringify(session?.user)}</div>
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
