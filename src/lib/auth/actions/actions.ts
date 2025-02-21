'use server';

import * as auth from "@appLib/auth/auth";

export async function signIn() {
  return auth.signIn('github');
}

export async function signOut() {
  return auth.signOut();
}