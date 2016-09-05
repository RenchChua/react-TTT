import React from "react";
import BoardStore from "../stores/BoardStore"

export default class Box extends React.Component {
  constructor(props) {
    super(props)
    this.render = this.render.bind(this);
    this.playerRender = this.playerRender.bind(this);
  }

  mouseIn(e){

    if (this.props.value === 0) {
      if (this.props.playerTurn) {
        e.target.innerHTML='<i class = "crossIcon"></i>'
      }else {
        e.target.innerHTML='<i class = "circleIcon"></i>'
      }
    }
  }

  mouseOut(e){
    if (this.props.value === 0) {
      if (this.props.playerTurn) {
        e.target.innerHTML=''
      }else {
        e.target.innerHTML=''
      }
    }
  }

  clickHandler(e) {
    this.props.updateEvent(this.props.coord);
  }

  playerRender() {
    if(this.props.value === 1) {
      return (
        <div id="playerOne" class="content"><i class="crossIcon"></i></div>
      )
    } else if(this.props.value === -1) {
      return (
        <div id="playerTwo" class="content"><i class="circleIcon"></i></div>
      )
    } else if(this.props.gameState && this.props.value === 0) {
      return (
        <div class="content" onClick={this.clickHandler.bind(this)} onMouseEnter={this.mouseIn.bind(this)} onMouseLeave={this.mouseOut.bind(this)}>
          <h1></h1>
        </div>
      )
    }
  }


  render() {
    return (
      <div className="box" >
        {this.playerRender()}
      </div>
    )
  }
}
