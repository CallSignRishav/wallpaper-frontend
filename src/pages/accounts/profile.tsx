import UserInfo from "@/components/AccountComps/UserInfo";
import UserPosts from "@/components/AccountComps/UserPosts";
import LoadingCard from "@/components/HomeComps/LoadingCard";
import getCurrentUser from "@/utils/getCurrentUser";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Skeleton } from "@nextui-org/skeleton";
import { BookUser, Mail, Pen, UserRound } from "lucide-react";
import Head from "next/head";

const profile = () => {
  const { data, isFetching, isLoading, isFetched, isSuccess, isError, error } =
    getCurrentUser();

  if (isLoading || isFetching) {
    return (
      <>
        <div className="flex w-full flex-col items-center justify-center gap-20 py-20">
          <Card className="flex w-full flex-col items-center justify-center">
            <CardBody className="grid max-w-lg grid-cols-3 gap-5 text-xl">
              <div className="flex justify-end">
                <UserRound size={35} />
              </div>

              <div className="col-span-2 capitalize">
                <Skeleton className="rounded-lg">Admin User</Skeleton>
              </div>

              <div className="flex justify-end">
                <Mail size={35} />
              </div>

              <div className="col-span-2">
                <Skeleton className="rounded-lg">example@text.com</Skeleton>
              </div>

              <div className="flex justify-end">
                <BookUser size={35} />
              </div>

              <div className="col-span-2">
                <Skeleton className="rounded-lg">
                  Lorem ipsum dolor sit amet consectetur
                </Skeleton>
              </div>
            </CardBody>

            <Divider />

            <CardFooter className="flex justify-end">
              <Skeleton className="rounded-lg">
                <Button isIconOnly>
                  <Pen />
                </Button>
              </Skeleton>
            </CardFooter>
          </Card>

          <div className="grid grid-cols-1 place-items-center gap-10 md:grid-cols-2 md:items-start lg:grid-cols-3 xl:grid-cols-4">
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
          </div>
        </div>
        ;
      </>
    );
  }

  if (isError) {
    return <div className="text-center text-xl">{error.message}</div>;
  }

  if (isSuccess && isFetched) {
    // console.log(data);

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
              <UserInfo userData={data} />
            </CardFooter>
          </Card>

          <UserPosts authorId={data.id} />
        </div>
      </>
    );
  }
};

export default profile;
