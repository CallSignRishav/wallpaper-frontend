import PostCard from "./PostCard";

const AllPosts = () => {
  const postArray = [
    {
      id: "1",
      post_caption: "Wallpaper 1",
      post_img: "/wall-1.jpg",
      post_author: "John Doe",
    },

    {
      id: "2",
      post_caption: "Wallpaper 2",
      post_img: "/wall-2.jpg",
      post_author: "Micky Mouse",
    },

    {
      id: "3",
      post_caption: "Wallpaper 3",
      post_img: "/wall-3.png",
      post_author: "Fread Eagle",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-3">
        {postArray.map((item) => {
          return (
            <PostCard
              key={item.id}
              details={item}
            />
          );
        })}
      </div>
    </>
  );
};

export default AllPosts;
