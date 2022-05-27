import { Component } from "react";
import Overview from "./Overview";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: " " };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.taskArray = [];
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.taskArray.push("Hoiya");
    let taskList = this.taskArray.map((e) => {
      console.log(taskList);
      return <li>{e.value}</li> + "\n";
    });
    this.setState({
      value: { taskList },
    });

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Tasks:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <Overview mappedArray={this.handleSubmit} />
      </div>
    );
  }
}
export default App;
