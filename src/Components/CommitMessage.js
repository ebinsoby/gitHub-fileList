import React from "react";
import PropTypes from "prop-types";

export const CommitMessage = ({ message }) => (
  <div className="commit-message">{message}</div>
);
CommitMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
