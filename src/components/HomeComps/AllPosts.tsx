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

    {
      id: "4",
      post_caption: "Wallpaper 4",
      post_img: "/wall-3.png",
      post_author: "John Doe",
    },

    {
      id: "5",
      post_caption: "Wallpaper 5",
      post_img: "/wall-2.jpg",
      post_author: "Micky Mouse",
    },

    {
      id: "6",
      post_caption: "Wallpaper 6",
      post_img: "/wall-1.jpg",
      post_author: "John Doe",
    },
  ];

  return (
    <>
      <div className="flex flex-wrap justify-evenly gap-10">
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
