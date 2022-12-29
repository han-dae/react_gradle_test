import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserListComponent from "../user/UserListComponent";
import AddUserComponent from "../user/AddUserComponent";
import EditUserComponent from "../user/EditUserComponent";
// import List from "../user/UserListComponent";
// import addUser from "../user/AddUserComponent";
// import editUser from "../user/EditUserComponent";

const AppRouter = () => {
  return (

      <div style={style}>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<UserListComponent />} />
            <Route path="/users" element={<UserListComponent />} />
            <Route path="/add-user" element={<AddUserComponent />} />
            <Route path="/edit-user" element={<EditUserComponent />} />
          </Routes>
      </BrowserRouter>
      </div>
   
  );
}

const style = {
  color: "red",
  margin: "10px",
}

export default AppRouter;
