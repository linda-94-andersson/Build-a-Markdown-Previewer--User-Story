import React, { useState } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Preview from "./components/Preview";

function App() {
  const defaultMarkdown = `# Heading
## Sub Heading
[Link](https://www.example.com)

\`inline code\`

\`\`\`
// Code block
function example() {
  return 'Hello, world!';
}
\`\`\`

- List item 1
- List item 2

> Blockquote

![Image](https://www.example.com/image.jpg)

**Bolded text**
`;

  const [markdown, setMarkdown] = useState(defaultMarkdown);

  const handleEditorChange = (value) => {
    setMarkdown(value);
  };

  return (
    <div className="app">
      <Editor value={markdown} onChange={handleEditorChange} />
      <Preview markdown={markdown} />
    </div>
  );
}

export default App;
