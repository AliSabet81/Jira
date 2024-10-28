import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/queries";

import { WorkspaceIdpageClient } from "./client";

const WorkspaceIdpage = async () => {
  const user = await getCurrent();

  if (!user) redirect("/sign-in");

  return <WorkspaceIdpageClient />;
};

export default WorkspaceIdpage;
