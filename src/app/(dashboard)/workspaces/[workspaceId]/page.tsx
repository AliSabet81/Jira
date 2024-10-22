import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/actions";

const WorkspaceIdpage = async () => {
  const user = await getCurrent();

  if (!user) redirect("/sign-in");

  return <div>WorkspaceIdpage</div>;
};

export default WorkspaceIdpage;
