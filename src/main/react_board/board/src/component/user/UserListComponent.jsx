import React, { Component } from "react";
import ApiService from "../../ApiService";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
//import CreateIcon from "@material-ui/icons/Create";
//import DeleteIcon from "@material-ui/icons/Delete";

class UserListComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      message: null,
    };
  }

  componentDidMount() {
    //this.reloadUserList();
  }
  reloadUserList = () => {
    ApiService.fetchUsers()
      .then((res) => {
        this.setState({
          users: res.data,
        });
      })
      .catch((err) => {
        console.log("reloadUserList() Error", err);
      });
  };

  deleteUser = (userID) => {
    ApiService.deleteUser(userID)
      .then((res) => {
        this.setState({
          message: "user delete",
        });
        this.setState({
          users: this.state.users.filter((user) => user.id !== userID),
        });
      })

      .catch((err) => {
        console.log("delete Error", err);
      });
  };

  editUser = (ID) => {
    window.localStorage.setItem("userID", ID);
    this.props.history.push("/edit-user");
  };

  addUser = () => {
    window.localStorage.removeItem("userID");
    this.props.history.push("/add-user");
  };
  render() {
    return (
      <div>
        <Typography>User List</Typography>
        <Button onClick={this.addUser}> Add User</Button>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>First name</TableCell>
              <TableCell>Last name</TableCell>
              <TableCell>User name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Salary</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.firstName}</TableCell>
                <TableCell>{user.lastName}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.age}</TableCell>
                <TableCell>{user.salary}</TableCell>
                <TableCell>
                  <Button onClick={() => this.editUser(user.id)}>Edit</Button>

                  <Button onClick={() => this.deleteUser(user.id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}


export default UserListComponent;
