import React from "react";
import PropTypes from "prop-types";
import Time from "./Time";
import {CommitMessage} from './CommitMessage'
import {FileName} from './FileName'


export const FileListItem = ({ file }) => (
  <tr className="file-list-item">
    <td>
      <FileName file={file} />
    </td>
    <td>
      <CommitMessage message={file.latestCommit.message} />
    </td>

    <td className="age">
      <Time time={file.updated_at} />
    </td>
  </tr>
);

FileListItem.propTypes = {
  file: PropTypes.object.isRequired,
};
