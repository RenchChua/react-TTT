import {EventEmitter} from "events";
import dispatcher from "../dispatcher";


class BoardStore extends EventEmitter{
  constructor(){
    super();
    this.state ={gameboard: [[0,0,0],
                             [0,0,0],
                             [0,0,0]],
                 player1: true,
                 turn: 0,
                 gameState: true,
                 message: "",
                 player1Score: 0,
                 player2Score: 0};
  }

  getBoardState(){
    return this.state;
  }

  updateBoard(coords){
    let rowNum = coords[0];
    let colNum = coords[1]
    if(this.state.player1) {
      this.state.gameboard[colNum][rowNum] = 1;
    } else {
      this.state.gameboard[colNum][rowNum] = -1;
    }
    this.state.player1 = !(this.state.player1)

    this.state.turn += 1
    this.checkWin();

    this.emit("change");
  }

  checkWin() {
    let board = this.state.gameboard

    if(board[0][0] + board[0][1] + board[0][2] === 3) {
      this.state.message = "Player One Wins!"
      this.state.gameState = false
      this.state.player1Score += 1
    } else if (board[1][0] + board[1][1] + board[1][2] === 3) {
      this.state.message = "Player One Wins!"
      this.state.gameState = false
      this.state.player1Score += 1
    } else if (board[2][0] + board[2][1] + board[2][2] === 3) {
      this.state.message = "Player One Wins!"
      this.state.gameState = false
      this.state.player1Score += 1
    } else if (board[0][0] + board[0][1] + board[0][2] === -3) {
      this.state.message = "Player Two Wins!"
      this.state.player2Score += 1
      this.state.gameState = false
    } else if (board[1][0] + board[1][1] + board[1][2] === -3) {
      this.state.message = "Player Two Wins!"
      this.state.player2Score += 1
      this.state.gameState = false
    } else if (board[2][0] + board[2][1] + board[2][2] === -3) {
      this.state.message = "Player Two Wins!"
      this.state.player2Score += 1
      this.state.gameState = false
    } else if(board[0][0] + board[1][0] + board[2][0] === 3) {
      this.state.message = "Player One Wins!"
      this.state.player1Score += 1
      this.state.gameState = false
    } else if (board[0][1] + board[1][1] + board[2][1] === 3) {
      this.state.message = "Player One Wins!"
      this.state.player1Score += 1
      this.state.gameState = false
    } else if (board[0][2] + board[1][2] + board[2][2] === 3) {
      this.state.message = "Player One Wins!"
      this.state.player1Score += 1
      this.state.gameState = false
    } else if (board[0][0] + board[1][0] + board[2][0] === -3) {
      this.state.message = "Player Two Wins!"
      this.state.player2Score += 1
      this.state.gameState = false
    } else if (board[0][1] + board[1][1] + board[2][1] === -3) {
      this.state.message = "Player Two Wins!"
      this.state.player2Score += 1
      this.state.gameState = false
    } else if (board[0][2] + board[1][2] + board[2][2] === -3) {
      this.state.message = "Player Two Wins!"
      this.state.player2Score += 1
      this.state.gameState = false
    } else if (board[0][0] + board[1][1] + board[2][2] === 3) {
      this.state.message = "Player One Wins!"
      this.state.player1Score += 1
      this.state.gameState = false
    } else if (board[0][2] + board[1][1] + board[2][0] === 3) {
      this.state.message = "Player One Wins!"
      this.state.player1Score += 1
      this.state.gameState = false
    } else if (board[0][0] + board[1][1] + board[2][2] === -3) {
      this.state.message = "Player Two Wins!"
      this.state.player2Score += 1
      this.state.gameState = false
    } else if (board[0][2] + board[1][1] + board[2][0] === -3) {
      this.state.message = "Player Two Wins!"
      this.state.player2Score += 1
      this.state.gameState = false
    } else if (this.state.turn === 9) {
      this.state.message = "It's a Draw!"
      this.state.gameState = false
    }
  }

  resetBoard(){
    this.state =
      {gameboard: [[0, 0, 0],
                   [0, 0, 0],
                   [0, 0, 0]],
                   player1: true,
                   turn: 0,
                   gameState: true,
                   message: "",
                   player1Score: 0,
                   player2Score: 0           };

    this.emit("change");
  }

  handleActions (action){
    switch(action.type){
      case "UPDATE_BOARD":
        this.updateBoard(action.coords);
        break;
      case "RESET_BOARD":
        this.resetBoard();
        break;
    }
  }
}


const boardStore = new BoardStore;

dispatcher.register(boardStore.handleActions.bind(boardStore));
export default boardStore;
