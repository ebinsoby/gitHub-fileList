import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./index.css";
import {FileListItem} from './Components/FileListItem'

const FileList = ({ files }) => (
  <table className="file-list">
    <tbody>
      {files.map((file) => (
        <FileListItem key={file.id} file={file} />
      ))}
    </tbody>
  </table>
);
FileList.propTypes = {
  files: PropTypes.array,
};


const testFiles = [
  {
    id: 1,
    name: "build",
    type: "folder",
    updated_at: "2021-07-11 21:24:00",
    latestCommit: {
      message: "Only warn for unexpected key",
    },
  },
  {
    id: 2,
    name: "docs",
    type: "folder",
    updated_at: "2021-12-12 21:33:00",
    latestCommit: {
      message: "Replace with Babel ES3 transforms",
    },
  },
  {
    id: 3,
    name: "public",
    type: "folder",
    updated_at: "2021-10-12 21:33:00",
    latestCommit: {
      message: "Add prototypes",
    },
  },
  {
    id: 4,
    name: "logo",
    type: "folder",
    updated_at: "2021-09-11 21:24:00",
    latestCommit: {
      message: "Added file V#32 logo",
    },
  },
  {
    id: 5,
    name: "src",
    type: "folder",
    updated_at: "2021-07-11 21:24:00",
    latestCommit: {
      message: "Mention we're observable in the API",
    },
  },
  {
    id: 6,
    name: "tests",
    type: "folder",
    updated_at: "2021-07-11 21:24:00",
    latestCommit: {
      message: "Mention we're observable in the API",
    },
  },
  {
    id: 7,
    name: ".babelrc",
    type: "file",
    updated_at: "2021-12-12 21:33:00",
    latestCommit: {
      message: "Replace with Babel ES3 transforms",
    },
  },
  {
    id: 8,
    name: ".eslintignore",
    type: "file",
    updated_at: "2021-11-22 20:33:00",
    latestCommit: {
      message: "Ignore all node_modules",
    },
  },
  {
    id: 9,
    name: "README",
    type: "file",
    updated_at: "2021-12-27 21:24:00",
    latestCommit: {
      message: "Added a readme",
    },
  },
];

ReactDOM.render(
  <FileList files={testFiles} />,
  document.querySelector("#root")
);
