import { authClient } from '@appLib/auth2/auth-client';
import { redirect } from 'next/navigation';

export function SignInAction() {
  return (
    <form
      action={async () => {
        "use server"
        // await authClient.signIn("github", { redirectTo: "/" })

        await authClient.signIn.social({
          provider: "github",
          callbackURL: "/my-account", 
          errorCallbackURL: "/error",
      });

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
        // await signOut();
        
        await authClient.signOut({
          fetchOptions: {
            onSuccess: () => {
              redirect("/logged-out"); // redirect to login page
            },
          },
        });

      }}
    >
      <button type="submit">Sign OUT</button>
    </form>
  )
}