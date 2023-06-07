import React, { Component } from "react";
import StudentService from "../services/StudentService";

class CreateStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      RollNumber: 0,
      Name: "",
      Group: "",
      PhoneNumber: 0,
      Email: "",
    };
    this.getTitle = this.getTitle.bind(this);
    this.onRollNumHandler = this.onRollNumHandler.bind(this);
    this.onNameHandler = this.onNameHandler.bind(this);
    this.onGroupHandler = this.onGroupHandler.bind(this);
    this.onPhoneNumberHandler = this.onPhoneNumberHandler.bind(this);
    this.onEmailerHandler = this.onEmailerHandler.bind(this);
    this.saveOrUpdateStudent = this.saveOrUpdateStudent.bind(this);
  }

  cancel() {
    this.props.history.push("/students");
  }
  saveOrUpdateStudent = (e) => {
    e.preventDefault();

    let Student = {
      rollnum: this.state.RollNumber,
      name: this.state.Name,
      Group: this.state.Group,
      PhoneNum: this.state.PhoneNumber,
      email: this.state.Email,
    };

    console.log("student =>" + JSON.stringify(Student));
    if (this.state.id === "_add") {
      StudentService.create(Student)
        .then((res) => {
          this.props.history.push("/students");
        })
        .catch((error) => console.log(error.message));
    } else {
      StudentService.update(this.state.id, Student)
        .then((res) => {
          this.props.history.push("/students");
        })
        .catch((error) => console.log(error.message));
    }
  };

  onEmailerHandler(e) {
    this.setState({
      Email: e.target.value,
    });
  }

  onPhoneNumberHandler(e) {
    this.setState({
      PhoneNumber: e.target.value,
    });
  }

  onGroupHandler(e) {
    this.setState({
      Group: e.target.value,
    });
  }

  onNameHandler(e) {
    this.setState({
      Name: e.target.value,
    });
  }

  onRollNumHandler(e) {
    this.setState({
      RollNumber: e.target.value,
    });
  }

  componentDidMount() {
    if (this.state.id === "_add") return;
    else {
      StudentService.get(this.state.id).then((res) => {
        this.setState({
          RollNumber: res.data.RollNum,
          Name: res.data.Name,
          Group: res.data.Group,
          PhoneNumber: res.data.PhoneNum,
          Email: res.data.Email,
        });
      });
    }
  }

  getTitle() {
    if (this.state.id === "_add") return <h3>Add Student</h3>;
    else {
      return <h3>Update Student</h3>;
    }
  }

  render() {
    return (
      <div>
        {this.getTitle()}
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>Roll Number :</label>
                    <input
                      type="number"
                      value={this.state.RollNumber}
                      onChange={this.onRollNumHandler}
                      placeholder="Enter Roll Number"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Name :</label>
                    <input
                      placeholder="Enter Name"
                      type="text"
                      value={this.state.Name}
                      onChange={this.onNameHandler}
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Group :</label>
                    <input
                      placeholder="Enter Group"
                      value={this.state.Group}
                      onChange={this.onGroupHandler}
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number :</label>
                    <input
                      type="number"
                      value={this.state.PhoneNumber}
                      onChange={this.onPhoneNumberHandler}
                      placeholder="Enter Phone Number"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label>Email:</label>
                    <input
                      type="email"
                      value={this.state.Email}
                      onChange={this.onEmailerHandler}
                      placeholder="Enter Email Id"
                      className="form-control"
                    />
                  </div>
                  <br />
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={this.saveOrUpdateStudent}
                  >
                    Save
                  </button>{" "}
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateStudent;
