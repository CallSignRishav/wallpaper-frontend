import LoginComp from "@/components/AuthComps/LoginComp";
import SignupComp from "@/components/AuthComps/SignupComp";
import { Tab, Tabs } from "@nextui-org/tabs";
import Head from "next/head";
import Link from "next/link";

const auth = () => {
  return (
    <>
      <Head>
        <title>Auth Page | Wallpaper App</title>
        <meta
          name="description"
          content="Auth Page | Wallpaper App"
        />
      </Head>

      <div className="flex h-dvh flex-col items-center justify-start gap-10 pt-20">
        <Tabs
          aria-label="Options"
          variant="underlined"
          size="lg"
          classNames={{
            base: "",
            tabList: "border-b border-divider p-0",
            tab: "h-12 max-w-fit",
            tabContent: "text-2xl",
            cursor: "w-full",
            panel: "",
          }}>
          <Tab
            key="login"
            title="Log In">
            <LoginComp />
          </Tab>

          <Tab
            key="signup"
            title="Sign Up">
            <SignupComp />
          </Tab>
        </Tabs>

        <div className="text-xl">
          Don't want to log in / sign up?{" "}
          <Link
            href="/"
            className="text-blue-500">
            Explore
          </Link>
        </div>
      </div>
    </>
  );
};

export default auth;
