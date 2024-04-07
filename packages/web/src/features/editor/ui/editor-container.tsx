import { useEffect, useRef } from "react";
import { useEditor } from "../stores";

const EditorContainer = () => {
  const { editor } = useEditor()!;

  const editorContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (editorContainerRef.current && editor) {
      editorContainerRef.current.innerHTML = "";
      editorContainerRef.current.appendChild(editor);
    }
  }, [editor]);

  return (
    <>
      <div className="editor-container" ref={editorContainerRef} />
    </>
  );
};

export default EditorContainer;
