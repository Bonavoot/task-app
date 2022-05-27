import { Component } from "react";

class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>{this.props.mappedArray}</ul>
      </div>
    );
  }
}

export default Overview;
