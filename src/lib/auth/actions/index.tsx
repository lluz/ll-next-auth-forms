import { signIn, signOut } from "@appLib/auth/auth";
 
export function SignInAction() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("github", { redirectTo: "/" })
      }}
    >
      <button type="submit">Sign IN</button>
    </form>
  )
}
 
export function SignOutAction() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut();
      }}
    >
      <button type="submit">Sign OUT</button>
    </form>
  )
}