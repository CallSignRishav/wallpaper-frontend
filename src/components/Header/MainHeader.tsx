import { useRouter } from "next/router";
import AuthNav from "./AuthNav";
import NavComp from "./NavComp";

type UserName = {
  first_name?: string;
};

const MainHeader = () => {
  const pathName = useRouter().pathname;

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
