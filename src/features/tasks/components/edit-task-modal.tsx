"use client";

import { ResponsiveModal } from "@/components/responsive-modal";

import CreateTaskFormWrapper from "./create-task-form-wrapper";
import { useEditTaskModal } from "../hooks/use-edit-task-modal";

export const EditTaskModal = () => {
  const { taskId, close } = useEditTaskModal();

  return (
    <ResponsiveModal open={!!taskId} onOpenChange={close}>
      {taskId && <CreateTaskFormWrapper onCancel={close} />}
    </ResponsiveModal>
  );
};
