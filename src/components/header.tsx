// 'use client'

import Image from 'next/image';
import { auth } from '@appLib/auth/auth';

import * as actions from '@appLib/auth/actions/actions';

export default async function MainHeader() {

  const session = await auth();

  let authContent: React.ReactNode;
  
  if (session?.user) {

    authContent = (
      <>
        {/* <SignOutAction /> */}
        <form action={actions.signOut}>
          <button type="submit">Sign Out</button>
        </form>
        <Image src={session.user.image || ''} width={60} height={60} alt={'avatar'} />
      </>
    );

  } 
  else {

    authContent = (
      <>
        {/* <SignInAction /> */}
        <form action={actions.signIn}>
          <button type="submit">
            Sign In
          </button>
        </form>
      </>
    );

  }

  return (
    <fieldset>
      {authContent}
    </fieldset>
  );
}
