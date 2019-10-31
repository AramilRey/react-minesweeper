import React from "react";
import Board from "../Board";

import "./style.css";

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.boardElement = React.createRef();

    this.state = {
      height: 8,
      width: 8,
      mines: 10
    };
  }

  restartGame = () => {
    this.setState({}, () => {
      this.boardElement.current.restartBoard();
    });
  };

  render() {
    const { height, width, mines } = this.state;
    return (
      <div className="game row">
        <div className="col-8">
          <Board
            ref={this.boardElement}
            height={height}
            width={width}
            mines={mines}
          />
        </div>
        <div className="col-4">
          <button onClick={this.restartGame}>Restart</button>

          <form>
            <label>Height</label>
            <input
              type="number"
              value={this.state.height}
              onChange={e => this.setState({ height: +e.target.value })}
            />
            <label>Width</label>
            <input
              type="number"
              value={this.state.width}
              onChange={e => this.setState({ width: +e.target.value })}
            />
            <label>Mines</label>
            <input
              type="number"
              value={this.state.mines}
              onChange={e => this.setState({ mines: +e.target.value })}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Game;
