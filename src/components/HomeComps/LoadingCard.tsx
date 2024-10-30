import { Image } from "@nextui-org/image";
import { Skeleton } from "@nextui-org/skeleton";

const LoadingCard = () => {
  return (
    <>
      <Skeleton className="rounded-lg">
        <Image
          src="/wall-1.jpg"
          alt="Demo Image"
          className="w-[350px] object-contain"
        />
      </Skeleton>
    </>
  );
};

export default LoadingCard;
