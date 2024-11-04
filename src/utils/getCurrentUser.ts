import { readMe } from "@directus/sdk";
import { useQuery } from "@tanstack/react-query";
import { sdk } from "./directusSdk";

const getCurrentUser = () => {
  return useQuery({
    queryKey: ["currentUser"],
    queryFn: async () => {
      const userData = sdk.request(
        readMe({
          fields: ["*"],
        }),
      );

      return userData;
    },
  });
};

export default getCurrentUser;
