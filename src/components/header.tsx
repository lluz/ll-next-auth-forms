// 'use client'

import Image from 'next/image';
import { auth } from '@appLib/auth/auth';

import { SignInAction, SignOutAction } from '@appLib/auth/actions';

export default async function MainHeader() {

  const session = await auth();

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
