import { useRouter } from "next/router";
import NavComp from "./NavComp";

const MainHeader = () => {
  const pathName = useRouter().pathname;

  if (pathName === "/") {
    return <NavComp />;
  } else {
    return <></>;
  }
};

export default MainHeader;
