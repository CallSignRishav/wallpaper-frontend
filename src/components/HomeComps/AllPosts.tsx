import { useQuery } from "@tanstack/react-query";
import PostCard from "./PostCard";
import { Posts, sdk } from "@/utils/directusSdk";
import { readItems } from "@directus/sdk";

const AllPosts = () => {
  const { isLoading, isFetching, isSuccess, isFetched, isError, data } =
    useQuery({
      queryKey: ["posts"],
      queryFn: async () => {
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
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {isError}</div>;
  }

  if (isFetched && isSuccess) {
    // console.log(data);

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
