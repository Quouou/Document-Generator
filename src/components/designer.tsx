"use client";

import React from "react";
import { SideBar } from "./sidebar";
import { useDroppable } from "@dnd-kit/core";
import QuillEditor from "./quill";

export function Designer() {
  const droppable = useDroppable({
    id: "designer-droppable",
    data: {
      isDesignerDropArea: true,
    },
  });
  return (
    <div className="flex w-full h-full">
      <SideBar />
      <div className="p-4 w-full">
        <div className="bg-background max-w-[1200x] h-[1000px] m-auto rounded-xl flex flex-col flex-grow items-center justify-start flex-1 overflow-y-auto">
          <QuillEditor />
          <p className="text-3xl text-muted-foreground flex flex-grow items-center font-bold"></p>
        </div>
      </div>
    </div>
  );
}
