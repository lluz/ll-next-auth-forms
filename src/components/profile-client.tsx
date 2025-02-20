'use client'

import { authClient } from '@appLib/auth2/auth-client';

export default function ProfileClient() {

  const { 
      data: session, 
      isPending, //loading state
      error, //error object
      refetch //refetch the session
  } = authClient.useSession();

  if (session?.user) {
    return (
      <>
        <div>From client: {JSON.stringify(session.user)}</div>
      </>
    );
  }

  return (
    <>
      <div>---user is NOT signed in</div>
    </>
  );

}
