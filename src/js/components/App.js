import React from "react";
import Header from "./Header";
import Board from "./Board";
import Restart from "./Restart"
import BoardStore from "../stores/BoardStore"
import * as BoardActions from "../actions/BoardActions"

export default class App extends React.Component {

  constructor() {
    super();

    this.state = {BoardState: BoardStore.getBoardState()}
    this.getState = this.getState.bind(this);
    this.render = this.render.bind(this);
  }

  getState(){
    this.setState({
      BoardState: BoardStore.getBoardState(),
    });
  }

  componentWillMount() {
    BoardStore.on("change", this.getState);
  }

  updateEvent(coords) {
    BoardActions.updateBoard(coords);
  }


  restart(){
    BoardActions.resetBoard();
  }

  render() {
    return(
      <div class="container row">
        <Header title="React Rac City Itch" subtitle="Simple game of tic tac toe on React" gameState={this.state.BoardState.gameState} message={this.state.BoardState.message} score1 = {this.state.BoardState.player1Score} score2 = {this.state.BoardState.player2Score}/>
        <Board playerTurn = {this.state.BoardState.player1} grid={this.state.BoardState.gameboard} gameState={this.state.BoardState.gameState} updateEvent={this.updateEvent.bind(this)}/>
        <Restart restart={this.restart.bind(this)}/>
      </div>
    )
  }
}
