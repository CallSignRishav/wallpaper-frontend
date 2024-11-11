import UploadFile from "@/components/AccountComps/UploadFile";
import AllPosts from "@/components/HomeComps/AllPosts";

import Head from "next/head";

const account = () => {
  return (
    <>
      <Head>
        <title>Home | Wallpaper App</title>
        <meta
          name="description"
          content="Home | Wallpaper App"
        />
      </Head>

      <div className="space-y-10 py-20">
        <div className="flex items-center justify-center">
          <UploadFile />
        </div>

        <AllPosts />
      </div>
    </>
  );
};

export default account;
