import { Posts, sdk } from "@/utils/directusSdk";
import { readItems } from "@directus/sdk";
import { useQuery } from "@tanstack/react-query";
import LoadingCard from "../HomeComps/LoadingCard";
import PostCard from "../HomeComps/PostCard";

type UserPostProp = {
  authorId: string;
};

const UserPosts = ({ authorId }: UserPostProp) => {
  const { isLoading, isFetching, isSuccess, isFetched, isError, error, data } =
    useQuery({
      queryKey: ["posts", authorId],
      queryFn: async () => {
        // await new Promise((r) => setTimeout(r, 1000));

        const response = await sdk.request(
          readItems("posts", {
            fields: ["*"],
            filter: {
              post_author: {
                _eq: authorId,
              },
            },
          }),
        );

        return response as Posts[];
      },
    });

  if (isLoading || isFetching) {
    return (
      <div className="grid grid-cols-1 place-items-center gap-10 md:grid-cols-2 md:items-start lg:grid-cols-3 xl:grid-cols-4">
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
      </div>
    );
  }

  if (isError) {
    return <div className="text-center text-xl">{error.message}</div>;
  }

  if (isFetched && isSuccess) {
    console.log(data);

    return (
      <>
        <div className="grid grid-cols-1 place-items-center gap-10 md:grid-cols-2 md:items-start lg:grid-cols-3 xl:grid-cols-4">
          {data.map((item) => {
            return (
              <PostCard
                key={item.id}
                // details={item}
                details={item}
              />
            );
          })}
        </div>
      </>
    );
  }
};

export default UserPosts;
