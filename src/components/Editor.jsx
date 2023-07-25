import React from "react";

const Editor = ({ value, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <textarea
      id="editor"
      rows="33"
      cols="55"
      value={value}
      onChange={handleChange}
    ></textarea>
  );
};

export default Editor;
