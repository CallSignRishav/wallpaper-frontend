import { darkModeAtom } from "@/utils/atoms";
import { Button } from "@nextui-org/button";
import { useAtom } from "jotai/react";
import { useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const ToggleDark = () => {
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
      <Button
        onPress={() => setDark(!dark)}
        isIconOnly
        variant="light"
        radius="full"
        size="lg"
        color={dark ? "primary" : "success"}>
        {dark ? <Sun /> : <Moon />}
      </Button>
    </>
  );
};

export default ToggleDark;
