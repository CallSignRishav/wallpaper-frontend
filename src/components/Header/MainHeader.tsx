import { useRouter } from "next/router";
import NavComp from "./NavComp";
import AuthNav from "./AuthNav";
import { useAtom } from "jotai/react";
import { userAtom } from "@/utils/atoms";

type UserName = {
  first_name?: string;
};

const MainHeader = () => {
  const pathName = useRouter().pathname;
  // const [accUser, setAccUser] = useAtom(userAtom);

  //   const userTest = accUser? accUser.first_name : "Admin"

  if (pathName === "/") {
    return <NavComp />;
  }
  if (pathName === "/account" || pathName === "/accounts/profile") {
    return <AuthNav />;
  } else {
    return <></>;
  }
};

export default MainHeader;
