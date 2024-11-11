import { userAtom } from "@/utils/atoms";
import { sdk } from "@/utils/directusSdk";
import getCurrentUser from "@/utils/getCurrentUser";
import { formSchema } from "@/utils/schemas";
import { FormType } from "@/utils/types";
import { createItem, uploadFiles } from "@directus/sdk";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Textarea } from "@nextui-org/input";
import { useQueryClient } from "@tanstack/react-query";
import { useAtom } from "jotai/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useFilePicker } from "use-file-picker";

const UploadFile = () => {
  const queryClient = useQueryClient();

  const { data, isFetching, isLoading, isFetched, isSuccess, isError, error } =
    getCurrentUser();

  const [accUser, setAccUser] = useAtom(userAtom);

  // for storing file state manually
  const [fileSelected, setFileSelected] = useState(false);

  // using useFilePicker for file selection
  const { openFilePicker, filesContent, plainFiles, clear } = useFilePicker({
    multiple: false,
    accept: "image/*",
    readAs: "DataURL",
    onFilesSuccessfullySelected: () => {
      setFileSelected(true);
    },
    onClear: () => {
      setFileSelected(false);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset,
  } = useForm<FormType>({
    resolver: zodResolver(formSchema),
    mode: "all",
  });

  // funtion to clear form and reset file state
  const clearFn = () => {
    clear();
    reset();
  };

  const fileUploadFn = async (fData: FormType) => {
    if (isSuccess) {
      const formData = new FormData();
      formData.append("file", plainFiles[0]);

      const imgId = await sdk.request(uploadFiles(formData));

      await sdk.request(
        createItem("posts", {
          post_author: data.id,
          post_caption: fData.post_caption,
          post_img: imgId.id,
        }),
      );

      queryClient.refetchQueries({ queryKey: ["posts"] });

      toast.success("File uploaded successfully");

      clear();
      reset();
    }
  };

  return (
    <>
      <div className="">
        <Card>
          <CardBody className="min-w-[300px] items-center gap-4">
            {fileSelected ? (
              <></>
            ) : (
              <Button
                size="lg"
                color="primary"
                variant="ghost"
                onPress={() => openFilePicker()}
                fullWidth>
                Select image
              </Button>
            )}

            {filesContent.map((file, index) => {
              return (
                <div key={index}>
                  <img
                    alt={file.name}
                    src={file.content}
                    width={300}
                    className="rounded-xl"
                  />
                </div>
              );
            })}

            {fileSelected ? (
              <>
                <form
                  onSubmit={handleSubmit(fileUploadFn)}
                  className="w-full space-y-4"
                  noValidate>
                  <Textarea
                    color={isValid ? "success" : "primary"}
                    variant="bordered"
                    label="Caption"
                    {...register("post_caption")}
                    errorMessage={errors.post_caption?.message}
                    isInvalid={!!errors.post_caption?.message}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    color="primary"
                    variant="shadow"
                    isLoading={isSubmitting}
                    fullWidth>
                    Create Post
                  </Button>

                  <Button
                    onPress={clearFn}
                    size="lg"
                    color="danger"
                    variant="shadow"
                    fullWidth>
                    Cancel
                  </Button>
                </form>
              </>
            ) : (
              <></>
            )}
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default UploadFile;
