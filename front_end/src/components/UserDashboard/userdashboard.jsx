import React from "react";

import { UserSidebar } from "../Util/UserLayout";
import { useSelector } from "react-redux";
import roboImage from "../Util/cloudrobo.jpeg";

const UserDashboard = () => {
  let UserDetails = {};
  const user = useSelector((state) => state.authentication.user);
  console.log("Userrr", user);
  if (!localStorage.getItem("user_fn")) {
    UserDetails = user.data.payload[0];
    localStorage.setItem("user_fn", UserDetails.first_name);
    localStorage.setItem("user_ln", UserDetails.last_name);
    localStorage.setItem("user_role", UserDetails.role);
    localStorage.setItem("userId", UserDetails.user_id);
  }
  return (
    <UserSidebar>
      <div class="card2">
        <br />
        <h2>
          Welcome {localStorage.getItem("user_fn")}{" "}
          {localStorage.getItem("user_ln")}{" "}
        </h2>
        <br />
        You logged in as an {localStorage.getItem("user_role")}
        <br />
        <img src={roboImage}></img>
      </div>
    </UserSidebar>
  );
};

export default UserDashboard;
