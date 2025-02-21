import * as auth from "@appLib/auth/auth";
 
export function SignInAction() {
  return (
    <form
      action={async () => {
        "use server"
        // await signIn("github", { redirectTo: "/" })
        await auth.signIn('github');
      }}
    >
      <button type="submit">Sign IN_</button>
    </form>
  )
}
 
export function SignOutAction() {
  return (
    <form
      action={async () => {
        "use server"
        await auth.signOut();
      }}
    >
      <button type="submit">Sign OUT_</button>
    </form>
  )
}