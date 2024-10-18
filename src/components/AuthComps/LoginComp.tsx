import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

const LoginComp = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="">Log In To Your Account</div>

        <form className="space-y-3">
          <Input
            label="Email"
            variant="underlined"
          />

          <Input
            label="Password"
            variant="underlined"
          />

          <Button color="success">Log in</Button>
        </form>
      </div>
    </>
  );
};

export default LoginComp;
