"use client";

import { PageError } from "@/components/page-error";
import { PageLoader } from "@/components/page-loader";

import { useProjectId } from "@/features/projects/hooks/use-project-id";
import { useGetProject } from "@/features/projects/api/use-get-project";
import { EditProjectForm } from "@/features/projects/components/edit-project-form";

export const ProjectIdSettingsClient = () => {
  const projectId = useProjectId();
  const { data: initialValues, isLoading } = useGetProject({ projectId });

  if (isLoading) {
    return <PageLoader />;
  }

  if (!initialValues) {
    return <PageError message="Project not found" />;
  }

  return (
    <div className="w-full lg:max-w-xl">
      <EditProjectForm initialValues={initialValues} />;
    </div>
  );
};
