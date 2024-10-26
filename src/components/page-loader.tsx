import { Loader } from "lucide-react";
import React from "react";

export const PageLoader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Loader className="size-6 animate-spin text-muted-foreground" />
    </div>
  );
};
