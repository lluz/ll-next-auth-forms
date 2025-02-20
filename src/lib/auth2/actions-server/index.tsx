import { auth, getSession } from "@appLib/auth2";
import { headers } from "next/headers";

export async function SignInAction() {

  const session = await getSession();

  return (
    <form
      action={async () => {
        "use server"

        await auth.api.signInSocial({
          body: {
            provider: "github",
          },
          callbackURL: "/my-account", 
          errorCallbackURL: "/error",
        });

      }}
    >
      <button type="submit">??? Sign IN__</button>
    </form>
  )
}
 
export async function SignOutAction() {

  const session = await getSession();

  return (
    <form
      action={async () => {
        "use server"
        
        await auth.api.signOut({
          headers: await headers(),
          redirectURL: "/logged-out",
        });

      }}
    >
      <button type="submit">??? Sign OUT__</button>
    </form>
  )
}