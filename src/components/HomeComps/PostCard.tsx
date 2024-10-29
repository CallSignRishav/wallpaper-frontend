import { Tooltip } from "@nextui-org/tooltip";
import { Image } from "@nextui-org/image";

interface PostType {
  id: string;
  post_caption: string;
  post_img: string;
  post_author: string;
}

const PostCard = ({ details }: { details: PostType }) => {
  return (
    <>
      <Tooltip
        content={details.post_caption}
        closeDelay={200}
        // offset={-150}

        classNames={{
          base: [
            // arrow color
            "before:bg-neutral-400 dark:before:bg-white",
          ],

          content: [
            "text-black font-noto_sans bg-gradient-to-br from-white to-blue-300 text-[.75rem] py-[1px]",
          ],
        }}>
        <Image
          isZoomed
          src={details.post_img}
          alt={details.post_author}
          className="w-[350px] object-contain"
        />
      </Tooltip>
    </>
  );
};

export default PostCard;
