import { ReactNode, useEffect } from "react";
import MainHeader from "./Header/MainHeader";
import { useAtom } from "jotai/react";
import { darkModeAtom } from "@/utils/atoms";

type LayoutPropType = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutPropType) => {
  const [dark, setDark] = useAtom(darkModeAtom);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <>
      <MainHeader />

      <main className="container mx-auto px-4">{children}</main>
    </>
  );
};

export default Layout;
