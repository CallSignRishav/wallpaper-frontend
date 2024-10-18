import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

const SignupComp = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="">Sign To Your Account</div>

        <form className="space-y-3">
          <Input
            label="Name"
            variant="underlined"
          />

          <Input
            label="Email"
            variant="underlined"
          />

          <Input
            label="Password"
            variant="underlined"
          />

          <Button color="success">Sign up</Button>
        </form>
      </div>
    </>
  );
};

export default SignupComp;
