import { Home } from "../pages";

import { EditorProvider } from "./providers/block-suite-provider";
import "./styles/index.css";

function App() {
  return (
    <EditorProvider>
      <Home />
    </EditorProvider>
  );
}

export default App;
