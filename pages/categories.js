import Layout from "@/component/Layout";
import { useRouter } from "next/router";

export default function Categories() {
  const router = useRouter();
  return (
    <Layout>
      <div
        className="flex items-center space-x-3 justify-between"
      >
        <h1 className="text-4xl font-bold">Categories</h1>
        <button
          className="bg-blue-500 rounded-lg text-white p-2"
          onClick={() => {
            console.log(
              "lmao"
            );
          }}
        >push
        </button>
      </div>
    </Layout>
  );
}
