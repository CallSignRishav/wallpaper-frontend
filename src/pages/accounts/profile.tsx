import UserPosts from "@/components/AccountComps/UserPosts";
import getCurrentUser from "@/utils/getCurrentUser";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { BookUser, Mail, UserRound } from "lucide-react";
import Head from "next/head";

const profile = () => {
  const { data, isFetching, isLoading, isFetched, isSuccess, isError, error } =
    getCurrentUser();

  if (isSuccess && isFetched) {
    return (
      <>
        <Head>
          <title>Profile | Wallpaper App</title>
          <meta
            name="description"
            content="Profile | Wallpaper App"
          />
        </Head>

        <div className="flex w-full flex-col items-center justify-center gap-20 py-20">
          <Card className="flex w-full flex-col items-center justify-center">
            <CardBody className="grid max-w-lg grid-cols-3 gap-5 text-xl">
              <div className="flex justify-end">
                <UserRound size={35} />
              </div>
              <div className="col-span-2 capitalize">{data.first_name}</div>

              <div className="flex justify-end">
                <Mail size={35} />
              </div>
              <div className="col-span-2">{data.email}</div>

              <div className="flex justify-end">
                <BookUser size={35} />
              </div>
              <div className="col-span-2">
                {data.description === null
                  ? "No description"
                  : data.description}
              </div>
            </CardBody>

            <Divider />

            <CardFooter className="flex justify-end">
              <Button>Edit Profile</Button>
            </CardFooter>
          </Card>

          <UserPosts authorId={data.id} />
        </div>
      </>
    );
  }
};

export default profile;
