import React from "react";
import { EditorContext, initEditor } from "../../../features/editor/stores";

export const EditorProvider = ({ children }: { children: React.ReactNode }) => {
  const { editor, collection } = initEditor();

  return (
    <EditorContext.Provider value={{ editor, collection }}>
      {children}
    </EditorContext.Provider>
  );
};
