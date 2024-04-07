import { useEditor } from "../features/editor/stores";
import EditorContainer from "../features/editor/ui/editor-container";
import Sidebar from "../features/editor/ui/side-bar";

export const Home = () => {
  const { collection } = useEditor()!;
  const f = () => console.log(collection?.getDoc("page1"));

  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <EditorContainer />
        <button onClick={f}>save</button>
      </div>
    </div>
  );
};
