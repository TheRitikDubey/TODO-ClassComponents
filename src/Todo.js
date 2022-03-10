import React, { Component } from "react";
class Todo extends Component {
  constructor() {
    super();
    this.state = {
      task: [
        { task: "checkMail", id: 1 },
        { task: "Learn ReactJs", id: 2 },
      ],
      Currtask: "",
    };
  }
  //For hadeling The change when we write any thing in our text board;
  handleChange = (e) => {
    //arrow funciton will  help  us to  use this so we are usiing arrow funnciton;
    console.log(e.target.value);
    this.setState((prevData) => ({
      ...prevData,
      Currtask: e.target.value,
    }));
  };
  //after onclick when we want to add task into  our dashboard;
  HandleSubmit = (e) => {
    this.setState({
      task: [
        ...this.state.task,
        { task: this.state.Currtask, id: this.state.task.length + 1 },
      ],
      //      getLocal(this.state.task),

      Currtask: "",
    });

    localStorage.setItem("task", JSON.stringify(this.state.task));
  };
  //react LifeCycle:
  componentDidMount() {
    let a = localStorage.getItem("task");
    console.log(a);

    JSON.parse(a).map((taskObj) =>
      this.setState({
        task: [...this.state.task, taskObj],
      })
    );

    //let b = { task: a };
    //this.setState({
    // task: [...this.state.task, { task: a, id: this.state.task.length + 1 }],
    //});
  }

  //If  the task got done delete it from the list;
  Handledelete = (id) => {
    let narr = this.state.task.filter((taskObj) => {
      return taskObj.id !== id;
    });
    this.setState({
      task: [...narr],
    });
    localStorage.removeItem(id);
  };

  //UPDATING TASK IS GOING  TO DONE;

  HandleUpdate = (id) => {
    console.log("Updating");
  };

  //UPDATING  TASK IS END TILL HERE
  render() {
    console.log("render");
    return (
      <div className="pm">
        <div className="ip">
          <textarea
            className="inp"
            type="text"
            rows={8}
            cols={100}
            value={this.state.Currtask}
            onChange={this.handleChange}
          ></textarea>
        </div>
        <button className="subbtn" onClick={this.HandleSubmit}>
          Submit
        </button>
        <ul className="num">
          {this.state.task.map((taskObj, i) => (
            <li className="list" key={i}>
              <p>
                {taskObj.task}
                <button
                  className="del"
                  onClick={() => this.Handledelete(taskObj.id)}
                >
                  Delete
                </button>
                <button
                  className="upd"
                  onClick={() => this.HandleUpdate(taskObj.id)}
                >
                  Update
                </button>
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export const arr = [1, 2, 3, 4];
export default Todo;
