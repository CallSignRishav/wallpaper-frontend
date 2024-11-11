import getCurrentUser from "@/utils/getCurrentUser";
import Link from "next/link";

const AuthUserName = () => {
  const { data, isFetching, isLoading, isFetched, isSuccess, isError, error } =
    getCurrentUser();

  if (isLoading || isFetching) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (isSuccess && isFetched) {
    return (
      <>
        <Link
          className="capitalize"
          href="/accounts/profile">
          {data.first_name}
        </Link>
      </>
    );
  }
};

export default AuthUserName;
