import React from "react";
import "../css/Board.css";
class Board extends React.Component {
  render() {
    return (
      <div>
        <div className="div-board">
          <div className="row">{this.props.children}</div>
        
          <button
            className="btn btn-success add-button add"
            onClick={this.props.onAddNoteClicked}
          >
            Add
          </button>
        </div>

      </div>
    );
  }
}
export default Board;
