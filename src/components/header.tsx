// 'use client'

import Image from 'next/image';
import { authClient } from '@appLib/auth2/auth-client';

import { SignInAction, SignOutAction } from '@appLib/auth2/actions';

export default function MainHeader() {

  const { data: session } = authClient.useSession();

  let authContent: React.ReactNode;
  
  if (session?.user) {

    authContent = (
      <>
        <SignOutAction />
        <Image src={session.user.image || ''} width={60} height={60} alt={'avatar'} />
      </>
    );

  } 
  else {

    authContent = (
      <SignInAction />
    );

  }

  return (
    <fieldset>
      {authContent}
    </fieldset>
  );
}
