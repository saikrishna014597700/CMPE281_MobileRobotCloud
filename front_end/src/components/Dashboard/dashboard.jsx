import React from "react";

import { Sidebar } from "../Util/Layout";
import { useSelector } from "react-redux";
import roboImage from "../Util/cloudrobo.jpeg";

const HomePage = () => {
  let UserDetails = {};
  const user = useSelector((state) => state.authentication.user);
  if (!localStorage.getItem("user_fn")) {
    console.log("UserDetails", UserDetails);
    UserDetails = user.data.payload[0];
    localStorage.setItem("user_fn", UserDetails.first_name);
    localStorage.setItem("user_ln", UserDetails.last_name);
    localStorage.setItem("userId", UserDetails.user_id);
    localStorage.setItem("user_role", UserDetails.role);
  }
  return (
    <Sidebar>
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
    </Sidebar>
  );

  // const user = useSelector(state => state.authentication.user)
  // let UserDetails = {};
  // if (localStorage.getItem('user_fn')) {
  //     UserDetails = user.data.payload[0];
  //     localStorage.setItem('user_fn', UserDetails.first_name)
  //     localStorage.setItem('user_ln', UserDetails.last_name)
  //     localStorage.setItem('user_role', UserDetails.role)
  // }
  // console.log("Userd", localStorage.getItem("user_fn"), user.data);
  // if (localStorage.getItem('user_fn')) {
  //     return (
  //         <Sidebar>
  //             <div class="card2">
  //                 <br />
  //                 <h2>Welcome {localStorage.getItem('user_fn')} {localStorage.getItem('user_ln')} </h2>
  //                 <br />
  //                 You logged in as an {localStorage.getItem('user_role')}
  //                 <br />
  //             </div>
  //         </Sidebar>
  //     )
};
// return <Sidebar>Loading..</Sidebar>

// }

export default HomePage;
