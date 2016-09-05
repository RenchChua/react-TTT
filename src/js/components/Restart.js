import React from "react";

export default class Restart extends React.Component {
  constructor(props) {
    super(props)
    this.state = { }
  }
  render() {
    return (
      <div>
        <button onClick={this.props.restart} className="columns five btn btn-success"><h5>Restart</h5></button>
      </div>
    )
  }
}
