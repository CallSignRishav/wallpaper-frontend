import { userAtom } from "@/utils/atoms";
import { sdk } from "@/utils/directusSdk";
import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/modal";
import { useAtom } from "jotai/react";
import { LogOut } from "lucide-react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

const LogoutComp = () => {
  const { replace } = useRouter();

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const logOutFn = async () => {
    try {
      await sdk.logout();

      toast.success("Logged out successfully", {
        duration: 2500,
        style: {
          background: "#101818",
          color: "#fff",
        },
      });

      replace("/");
    } catch (error: any) {
      if (error.errors !== undefined) {
        toast.error(error.errors[0].message, {
          duration: 3000,
          style: {
            background: "#101818",
            color: "#fff",
          },
        });
      } else {
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
      <Button
        onPress={onOpen}
        isIconOnly
        variant="light"
        endContent={<LogOut />}></Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="flex flex-col items-center justify-center gap-3">
                <p className="text-xl">Are you sure you want to log out?</p>

                <div className="space-x-3">
                  <Button
                    color="danger"
                    onPress={logOutFn}>
                    Yes
                  </Button>

                  <Button
                    color="success"
                    onPress={onClose}>
                    No
                  </Button>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default LogoutComp;
