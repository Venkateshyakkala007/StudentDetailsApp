import React, { Component } from "react";
import StudentServices from "../services/StudentService";

class StudentList extends Component {
  // defining the constructor
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
    this.addStudent = this.addStudent.bind(this);
    this.editStudent = this.editStudent.bind(this);
    this.viewStudent = this.viewStudent.bind(this);
    this.deleteStudent = this.deleteStudent.bind(this);
  }

  deleteStudent(id) {
    StudentServices.delete(id).then((res) => {
      this.setState({
        students: this.state.students.filter((student) => student._id !== id),
      });
    });
  }

  viewStudent(id) {
    this.props.history.push(`/viewstudent/${id}`);
  }

  editStudent(id) {
    this.props.history.push(`/addStudent/${id}`);
  }

  addStudent() {
    this.props.history.push("/addstudent/_add");
  }

  componentDidMount() {
    StudentServices.getAll().then((res) => {
      this.setState({ students: res.data });
    });
  }

  render() {
    return (
      <div className="ms-1">
        <div>
          <button className="btn btn-primary ms-1" onClick={this.addStudent}>
            Add New Student
          </button>
        </div>
        <br></br>
        <div className="row  ms-1">
          <table className="table table-striped table-bordered">
            <thead>
              <th>RollNumber</th>
              <th>Name</th>
              <th>Group</th>
              <th>PhoneNumber</th>
              <th>Email id</th>
              <th>Actions</th>
            </thead>
            <tbody>
              {/* this is sample data later we can get data from the state array */}
              {this.state.students.map((student) => {
                return (
                  <tr key={student.id}>
                    <td>{student.RollNum}</td>
                    <td>{student.Name}</td>
                    <td>{student.Group}</td>
                    <td>{student.PhoneNum}</td>
                    <td>{student.Email}</td>
                    <td>
                      <button
                        className="btn btn-success"
                        onClick={() => this.editStudent(student._id)}
                      >
                        Update
                      </button>{" "}
                      <button
                        className="btn btn-primary"
                        onClick={() => this.viewStudent(student._id)}
                      >
                        view
                      </button>{" "}
                      <button
                        className="btn btn-danger"
                        onClick={() => this.deleteStudent(student._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
              {/* <tr>
                <td>170807109215</td>
                <td>Venkatesh Yakkala</td>
                <td>MSCS</td>
                <td>9182567021</td>
                <td>venkateshyakkala007@gmail.com</td>
                <td>
                  <button className="btn btn-success">Update</button>{" "}
                  <button className="btn btn-primary">view</button>{" "}
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>

              <tr>
                <td>170807109216</td>
                <td>Arihanth</td>
                <td>MPCS</td>
                <td>918256702</td>
                <td>Aarihan@gmail.com</td>
                <td>
                  <button className="btn btn-success">Update</button>{" "}
                  <button className="btn btn-primary">view</button>{" "}
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default StudentList;
