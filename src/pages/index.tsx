import AllPosts from "@/components/HomeComps/AllPosts";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>Home | Wallpaper App</title>
        <meta
          name="description"
          content="Home | Wallpaper App"
        />
      </Head>

      <div className="py-20">
        <AllPosts />
      </div>
    </>
  );
};

export default index;
