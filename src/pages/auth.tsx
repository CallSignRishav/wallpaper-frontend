import LoginComp from "@/components/AuthComps/LoginComp";
import SignupComp from "@/components/AuthComps/SignupComp";
import { Tab, Tabs } from "@nextui-org/tabs";

const auth = () => {
  return (
    <>
      <div className="flex h-dvh flex-col items-center justify-center">
        <Tabs aria-label="Options">
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
      </div>
    </>
  );
};

export default auth;
