import React, { useState, useEffect } from "react";

const Preview = ({ markdown }) => {
  const [previewHTML, setPreviewHTML] = useState("");

  useEffect(() => {
    const renderer = new window.marked.Renderer();
    renderer.link = (href, title, text) => {
      return `<a target="_blank" href="${href}">${text}</a>`;
    };

    // Update previewHTML whenever markdown changes
    setPreviewHTML(window.marked(markdown, { renderer }));
  }, [markdown]); // Only markdown as dependency

  return <div id="preview" dangerouslySetInnerHTML={{ __html: previewHTML }} />;
};

export default Preview;