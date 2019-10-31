import React from "react";
import PropTypes from "prop-types";

import "./style.css";

class Cell extends React.Component {
  getValue() {
    const { value } = this.props;

    if (!value.isRevealed) {
      return this.props.value.isFlagged ? "🚩" : null;
    } else if (value.isMine) {
      return "💣";
    } else if (value.isEmpty) {
      return "";
    }

    return value.n;
  }

  render() {
    const className =
      "cell embed-responsive-item align-middle" +
      (this.props.value.isRevealed ? "" : " hidden") +
      (this.props.value.isMine ? " is-mine" : "") +
      (this.props.value.isUnknown ? " is-unknown" : "") +
      (this.props.value.isFlagged ? " is-flag" : "");

    return (
      <span
        className={className}
        onClick={this.props.onClick}
        onContextMenu={this.props.cMenu}
      >
        {this.getValue()}
      </span>
    );
  }
}

// Type checking With PropTypes
const cellItemShape = {
  x: PropTypes.number,
  y: PropTypes.number,
  n: PropTypes.number,
  isRevealed: PropTypes.bool,
  isMine: PropTypes.bool,
  isFlagged: PropTypes.bool
};

Cell.propTypes = {
  value: PropTypes.objectOf(PropTypes.shape(cellItemShape)),
  onClick: PropTypes.func,
  cMenu: PropTypes.func
};

export default Cell;
