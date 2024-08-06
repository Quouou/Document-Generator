"use client";

import React, { useRef } from "react";
import { SideBar } from "./sidebar";
import QuillEditor from "./quill";

export function Designer() {
  const editorRef = useRef(null);

  const handleTemplateSelect = (content: string) => {
    if (editorRef.current) {
      editorRef.current.setContent(content);
    }
  };

  return (
    <div className="flex w-full h-full">
      <SideBar onSelectTemplate={handleTemplateSelect} />
      <div className="p-4 w-full">
        <div className="bg-background max-w-[1200px] h-[1000px] m-auto rounded-xl flex flex-col flex-grow items-center justify-start flex-1 overflow-y-auto">
          <div className="w-[1180px] h-full">
            <QuillEditor ref={editorRef} />
          </div>
        </div>
      </div>
    </div>
  );
}
