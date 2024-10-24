"use client";
import { useGetMembers } from "@/features/members/api/use-get-members";
import { useGetProjects } from "@/features/projects/api/use-get-projects";
import { useWorkspaceId } from "@/features/workspaces/hooks/use-workspace-id";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ListChecks, ListChecksIcon } from "lucide-react";
import { TaskStatus } from "../types";

type DataFiltersProps = {
  hideProjectFilters?: boolean;
};

export const DataFilters = ({ hideProjectFilters }: DataFiltersProps) => {
  const workspaceId = useWorkspaceId();

  const { data: projects, isLoading: isLoadingProjects } = useGetProjects({
    workspaceId,
  });
  const { data: members, isLoading: isLoadingMembers } = useGetMembers({
    workspaceId,
  });

  const isLoading = isLoadingProjects || isLoadingMembers;

  const projectOptions = projects?.documents.map((project) => ({
    id: project.$id,
    name: project.name,
    imageUrl: project.imageUrl,
  }));
  const memberOptions = members?.documents.map((member) => ({
    id: member.$id,
    name: member.name,
  }));

  if (isLoading) {
    return <div></div>;
  }

  return (
    <div className="flex flex-col lg:flex-col gap-2">
      <Select defaultValue={undefined} onValueChange={() => {}}>
        <SelectTrigger className="w-full lg:w-auto h-8">
          <ListChecksIcon className="size-4 mr-2" />
          <SelectValue placeholder="All statuses" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All statuses</SelectItem>
          <SelectSeparator />
          <SelectItem value={TaskStatus.BACKLOG}>Backlog</SelectItem>
          <SelectItem value={TaskStatus.TODO}>Todo</SelectItem>
          <SelectItem value={TaskStatus.IN_PROGRESS}>In Progress</SelectItem>
          <SelectItem value={TaskStatus.IN_REVIEW}>In Review</SelectItem>
          <SelectItem value={TaskStatus.DONE}>Done</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
