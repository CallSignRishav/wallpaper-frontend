import { ReactNode } from "react";
import MainHeader from "./Header/MainHeader";

type LayoutPropType = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutPropType) => {
  return (
    <>
      <MainHeader />
      <main className="">{children}</main>
    </>
  );
};

export default Layout;
