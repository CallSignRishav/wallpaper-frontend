import { sdk } from "@/utils/directusSdk";
import { signupSchema } from "@/utils/schemas";
import { SignUpType } from "@/utils/types";
import { createUser } from "@directus/sdk";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const SignupComp = () => {
  const [isVisible, setIsVisible] = useState(false);

  const { reload } = useRouter();

  const toggleVisibility = () => setIsVisible(!isVisible);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors, isValid },
  } = useForm<SignUpType>({
    resolver: zodResolver(signupSchema),
    mode: "all",
  });

  const formSubmit = async (data: SignUpType) => {
    try {
      await sdk.request(createUser(data));

      await new Promise((resolve) => setTimeout(resolve, 1000));

      // console.log(data);

      // reload();

      toast.success("Sign up successful. Log in to continue", {
        duration: 2500,
        style: {
          background: "#101818",
          color: "#fff",
        },
      });

      reset();
    } catch (error: any) {
      if (error.errors !== undefined) {
        console.log(error.errors[0].message);

        toast.error(error.errors[0].message, {
          duration: 3000,
          style: {
            background: "#101818",
            color: "#fff",
          },
        });
      } else {
        console.log("Network error");
        toast.error("Network error", {
          duration: 2500,
          style: {
            background: "#101818",
            color: "#fff",
          },
        });
      }
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="text-3xl">Sign In To Your Account</div>

        <form
          onSubmit={handleSubmit(formSubmit)}
          noValidate
          className="flex w-full flex-col justify-center gap-5">
          <Input
            color={isValid ? "success" : "primary"}
            label="Name"
            variant="underlined"
            size="lg"
            className="w-full"
            {...register("first_name")}
            errorMessage={errors.first_name?.message}
            isInvalid={!!errors.first_name?.message}
          />

          <Input
            color={isValid ? "success" : "primary"}
            label="Email"
            variant="underlined"
            size="lg"
            className="w-full"
            {...register("email")}
            errorMessage={errors.email?.message}
            isInvalid={!!errors.email?.message}
          />

          <Input
            color={isValid ? "success" : "primary"}
            label="Password"
            variant="underlined"
            size="lg"
            className="w-full"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
                aria-label="toggle password visibility">
                {isVisible ? <Eye /> : <EyeOff />}
              </button>
            }
            type={isVisible ? "text" : "password"}
            {...register("password")}
            errorMessage={errors.password?.message}
            isInvalid={!!errors.password?.message}
          />

          <Input
            defaultValue="e20a1888-44fd-4a48-8023-42f5de451234"
            {...register("role")}
            className="hidden"
            // isDisabled
          />

          <Button
            type="submit"
            color="success"
            size="lg"
            isLoading={isSubmitting}>
            {isSubmitting ? "" : "Sign up"}
          </Button>
        </form>
      </div>
    </>
  );
};

export default SignupComp;
