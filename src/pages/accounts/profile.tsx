import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { BookUser, Mail, User, UserRound, UsersRound } from "lucide-react";
import { Divider } from "@nextui-org/divider";
import AllPosts from "@/components/HomeComps/AllPosts";
import Head from "next/head";

const profile = () => {
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
            <div className="col-span-2">User Name</div>

            <div className="flex justify-end">
              <Mail size={35} />
            </div>
            <div className="col-span-2">admin@gmail.com</div>

            <div className="flex justify-end">
              <BookUser size={35} />
            </div>
            <div className="col-span-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae ut saepe dolores est
            </div>
          </CardBody>

          <Divider />

          <CardFooter className="flex justify-end">
            <Button>Edit Profile</Button>
          </CardFooter>
        </Card>

        <AllPosts />
      </div>
    </>
  );
};

export default profile;
