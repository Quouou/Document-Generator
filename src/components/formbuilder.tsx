"use client";

import React from "react";
import { Designer } from "./designer";
import { DndContext } from "@dnd-kit/core";

export function FormBuilder() {
  return (
    <DndContext>
      <div className="flex flex-col w-full  ">
        <div className="flex justify-between p-4 gap-3 items-center">
          <h2 className="truncate font-medium">
            <span className="text-muted-foreground mr-2">Form Name</span>
          </h2>
        </div>
        <div className="flex w-full flex-grow items-center justify-center relative overflow-y-auto h-full bg-accent bg-[url(/temple.svg)]">
          <Designer />
        </div>
      </div>
    </DndContext>
  );
}
