import { loginSchema } from "@/utils/schemas";
import { LogInType } from "@/utils/types";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { sdk } from "@/utils/directusSdk";
import { login } from "@directus/sdk";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

const LoginComp = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const { replace } = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors, isValid },
  } = useForm<LogInType>({
    resolver: zodResolver(loginSchema),
    mode: "all",
  });

  const formSubmit = async (data: LogInType) => {
    try {
      await sdk.request(
        login(data.email, data.password, {
          mode: "session",
        }),
      );

      await new Promise((resolve) => setTimeout(resolve, 1000));

      // console.log(data);

      reset();

      toast.success("Login successful");

      replace("/account");
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
        <div className="text-3xl">Log In To Your Account</div>

        <form
          onSubmit={handleSubmit(formSubmit)}
          noValidate
          className="flex w-full flex-col justify-center gap-5">
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

          <Button
            type="submit"
            color="success"
            size="lg"
            isLoading={isSubmitting}>
            {isSubmitting ? "" : "Log in"}
          </Button>
        </form>
      </div>
    </>
  );
};

export default LoginComp;
