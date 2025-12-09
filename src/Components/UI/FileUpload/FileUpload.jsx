import React from "react";

const FileUpload = ({ onChange, accept = "*", multiple = false }) => {
  return (
    <input
      type="file"
      onChange={onChange}
      accept={accept}
      multiple={multiple}
      className="border border-gray-300 rounded px-3 py-2 w-full cursor-pointer"
    />
  );
};

export default FileUpload;
