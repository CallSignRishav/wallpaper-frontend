import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { Textarea } from "@nextui-org/input";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useFilePicker } from "use-file-picker";

const UploadFile = () => {
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
    formState: { errors },
    reset,
  } = useForm();

  // funtion to clear form and reset file state
  const clearFn = () => {
    clear();
    reset();
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
                  className="w-full space-y-4"
                  noValidate>
                  <Textarea
                    color="primary"
                    variant="bordered"
                    label="Caption"
                    // {...register("caption")}
                    // errorMessage={errors.caption?.message}
                    // isInvalid={!!errors.caption?.message}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    color="primary"
                    variant="shadow"
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
