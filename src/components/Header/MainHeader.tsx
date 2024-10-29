import { useRouter } from "next/router";
import NavComp from "./NavComp";
import AuthNav from "./AuthNav";

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
