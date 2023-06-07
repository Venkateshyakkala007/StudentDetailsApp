import React, { Component } from "react";
import StudentService from "../services/StudentService";

class ViewComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,

      student: {},
    };
  }

  componentDidMount() {
    StudentService.get(this.state.id).then((res) => {
      this.setState({ student: res.data });
    });
  }

  render() {
    return (
      <div>
        <div className="card col-md-6 offset-md-3">
          <h3>View Student Details</h3>
          <div className="card-body">
            <div className="row">
              <label>Roll Number</label>
              <div>{this.state.student.RollNum}</div>
            </div>

            <div className="row">
              <label>Name</label>
              <div>{this.state.student.Name}</div>
            </div>

            <div className="row">
              <label>Group</label>
              <div>{this.state.student.Group}</div>
            </div>

            <div className="row">
              <label>Phone Number</label>
              <div>{this.state.student.PhoneNum}</div>
            </div>

            <div className="row">
              <label>Email</label>
              <div>{this.state.student.Email}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewComponent;
