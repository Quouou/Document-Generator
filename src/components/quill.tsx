"use client";

import React, {
  useRef,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

const QuillEditor = forwardRef((props, ref) => {
  const editorRef = useRef(null);
  const quillInstance = useRef<Quill | null>(null);

  useEffect(() => {
    if (editorRef.current && !quillInstance.current) {
      quillInstance.current = new Quill(editorRef.current, {
        theme: "snow",
      });
    }
  }, []);

  useImperativeHandle(ref, () => ({
    setContent: (content) => {
      if (quillInstance.current) {
        quillInstance.current.clipboard.dangerouslyPasteHTML(content);
      }
    },
  }));

  return <div ref={editorRef} className="h-full w-full" />;
});

QuillEditor.displayName = "QuillEditor";

export default QuillEditor;
