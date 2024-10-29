import UploadFile from "@/components/AccountComps/UploadFile";
import AllPosts from "@/components/HomeComps/AllPosts";

const account = () => {
  return (
    <>
      <div className="space-y-10 py-20">
        <div className="flex items-center justify-center">
          <UploadFile />
        </div>

        <AllPosts />
      </div>
    </>
  );
};

export default account;
