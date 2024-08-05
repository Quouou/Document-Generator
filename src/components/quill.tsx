"use client";

import React, { useRef, useEffect } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

const QuillEditor = () => {
  const editorRef = useRef(null);
  const quillInstance = useRef<Quill | null>(null);

  useEffect(() => {
    if (editorRef.current && !quillInstance.current) {
      quillInstance.current = new Quill(editorRef.current, {
        theme: "snow",
      });
    }
  }, []);

  return <div ref={editorRef} className="w-full h-full" />;
};

export default QuillEditor;
