import React from "react";
import { templates } from "./template";

export function SideBar({ onSelectTemplate }) {
  return (
    <div className="w-[400px] max-w-[400px] flex flex-col flex-grow gap-2 border-muted p-4 bg-background overflow-y-auto">
      <ul>
        {templates.map((template) => (
          <li key={template.id} className="mb-2">
            <button
              className="w-full text-left p-2 bg-white border rounded-md hover:bg-gray-100"
              onClick={() => onSelectTemplate(template.content)}
            >
              {template.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
