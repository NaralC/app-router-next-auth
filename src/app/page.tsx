import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();

  return (
    <>
      getServerSession Result
      <div>
        {session ? JSON.stringify(session, null, 2) : "Not Logged in :("}
      </div>
    </>
  );
}
