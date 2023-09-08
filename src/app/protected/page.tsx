import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Protected() {
    const session = await getServerSession();

  if (!session) {
    redirect("/api/auth/signin");
  }

  return <>
    This is a protected route. You only see this if you are logged in.
  </>;
}
