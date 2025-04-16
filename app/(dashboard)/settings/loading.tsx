import { Skeleton } from "@/components/ui/skeleton";
import { CircleIcon, Loader } from "lucide-react";
import React from "react";

function Loading() {
  return (
    <div className="w-full h-screen font-bold text-7xl flex justify-center items-center">
      <div className="flex flex-row mx-6">
        <Loader className="animate-spin text-blue-500" size={64} />
      </div>
    </div>
  );
}

export default Loading;
