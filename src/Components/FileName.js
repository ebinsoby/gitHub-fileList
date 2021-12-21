import React from "react";
import PropTypes from "prop-types";
import {FileIcon} from './FileIcon'

export const FileName = ({ file }) => (
    <>
      <FileIcon file={file} />
      <span className="file-name">{file.name}</span>
    </>
  );
  FileName.propTypes = {
    file: PropTypes.object.isRequired,
  };