import { useSession } from "next-auth/react";
import Layout from "/components/Layout";

export default function Home() {
  const { data: session } = useSession();
  //console.log({ session });
  return (
    <Layout>
      <div className="text-blue-900 flex justify-between">
        <h2>
          Hello, <b>{session?.user?.name}</b>
        </h2>
        <div className="flex bg-gray-300 text-black rounded-lg overflow-hidden">
          <img src={session?.user?.image} alt="" className="w-6 h-6" />
          <span className="px-2 py-1">{session?.user?.name}</span>
        </div>
      </div>
    </Layout>
  );
}
