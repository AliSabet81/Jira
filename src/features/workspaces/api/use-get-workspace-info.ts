import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/rpc";

interface useGetWorkspaceInfoProps {
  workspaceId: string;
}

export const useGetWorkspaceInfo = ({
  workspaceId,
}: useGetWorkspaceInfoProps) => {
  const query = useQuery({
    queryKey: ["workspaces"],
    queryFn: async () => {
      const response = await client.api.workspaces[":workspaceId"].info.$get({
        param: { workspaceId },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch workspaces");
      }

      const { data } = await response.json();
      return data;
    },
  });

  return query;
};
