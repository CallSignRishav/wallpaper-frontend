import { sdk } from "@/utils/directusSdk";
import { userEditSchema } from "@/utils/schemas";
import { UserEditType } from "@/utils/types";
import { updateMe } from "@directus/sdk";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { Input } from "@nextui-org/input";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { Pen } from "lucide-react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

type UserInfoProp = {
  first_name: string | null;
  email: string | null;
  description: string | null;
};

const UserInfo = ({ userData }: { userData: UserInfoProp }) => {
  const { reload } = useRouter();

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors, isValid },
  } = useForm<UserEditType>({
    resolver: zodResolver(userEditSchema),
    mode: "all",
  });

  const editFormSubmit = async (fData: UserEditType) => {
    await sdk.request(updateMe(fData));

    reload();
  };

  return (
    <>
      <Button
        isIconOnly
        onPress={onOpen}>
        <Pen />
      </Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <form
                noValidate
                onSubmit={handleSubmit(editFormSubmit)}>
                <ModalHeader className="flex justify-center text-center text-3xl">
                  Edit Profile
                </ModalHeader>

                <Divider />

                <ModalBody className="flex flex-col gap-5">
                  <Input
                    isRequired
                    color={isValid ? "success" : "primary"}
                    variant="underlined"
                    size="lg"
                    label="Name"
                    defaultValue={
                      userData.first_name ? userData.first_name : ""
                    }
                    {...register("first_name")}
                    errorMessage={errors.first_name?.message}
                    isInvalid={errors.first_name?.message ? true : false}
                  />

                  <Input
                    isRequired
                    color={isValid ? "success" : "primary"}
                    variant="underlined"
                    size="lg"
                    label="Email"
                    defaultValue={userData.email ? userData.email : ""}
                    {...register("email")}
                    errorMessage={errors.email?.message}
                    isInvalid={!!errors.email?.message}
                  />

                  <Input
                    color={isValid ? "success" : "primary"}
                    variant="underlined"
                    size="lg"
                    label="Description"
                    defaultValue={
                      userData.description ? userData.description : ""
                    }
                    {...register("description")}
                    errorMessage={errors.description?.message}
                    isInvalid={!!errors.description?.message}
                  />
                </ModalBody>

                <Divider />

                <ModalFooter>
                  <Button
                    color="danger"
                    variant="light"
                    onPress={onClose}>
                    Close
                  </Button>

                  <Button
                    color="success"
                    type="submit"
                    isLoading={isSubmitting}>
                    Update
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default UserInfo;
