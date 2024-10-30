import { Posts, sdk } from "@/utils/directusSdk";
import { readItems } from "@directus/sdk";
import { useQuery } from "@tanstack/react-query";
import LoadingCard from "./LoadingCard";
import PostCard from "./PostCard";

const AllPosts = () => {
  const { isLoading, isFetching, isSuccess, isFetched, isError, error, data } =
    useQuery({
      queryKey: ["posts"],
      queryFn: async () => {
        await new Promise((r) => setTimeout(r, 1000));

        const response = await sdk.request(
          readItems("posts", {
            fields: ["*", { post_author: ["*"] }],
          }),
        );

        return response as Posts[];
      },

      refetchOnWindowFocus: false,
    });

  if (isLoading || isFetching) {
    return (
      <div className="flex flex-wrap justify-evenly gap-10">
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
    return (
      <>
        <div className="flex flex-wrap justify-evenly gap-10">
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

export default AllPosts;
