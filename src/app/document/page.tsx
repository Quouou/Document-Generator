// pages/index.js

import Head from "next/head";
import QuillEditor from "@/components/quill";
import { FormBuilder } from "@/components/formbuilder";

export default function Document() {
  return (
    <div>
      <FormBuilder />
      {/* <QuillEditor /> */}
    </div>
  );
}
