import { Button } from "@nextui-org/button";
import { LogOut } from "lucide-react";
import {
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/modal";

const LogoutComp = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

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
                  <Button color="danger">Yes</Button>

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
