import React from "react";
import { Link, useLocation } from "react-router-dom";
import { UserSidebar } from "../Util/UserLayout";
import { useSelector } from "react-redux";
import { backend } from "../../webConfig";

const MoveRobot = () => {
  let UserDetails = {};
  const user = useSelector((state) => state.authentication.user);
  console.log("Userrr", user);
  if (!localStorage.getItem("user_fn")) {
    UserDetails = user.data.payload[0];
    localStorage.setItem("user_fn", UserDetails.first_name);
    localStorage.setItem("user_ln", UserDetails.last_name);
    localStorage.setItem("user_role", UserDetails.role);
  }

  // let startRobo = (e) => {
  //   e.preventDefault();
  //   var data = {
  //     roboId: 1,
  //     roboState: "Active",
  //   };
  //   axios
  //     .post(`${backend}/homelistings/submitLease`, data)
  //     .then(async function (response) {
  //       console.log("Pro are::", response.data);
  //       var emailData = {
  //         toEmail: toEmail,
  //         emailType: "Lease Application",
  //         listingName: listingName,
  //       };

  //       await axios
  //         .post(`${backend}/email/sendEmail`, emailData)
  //         .then((response2) => {
  //           alert("Application sent");
  //           console.log("email sent");
  //         });
  //     });
  // };

  return (
    <UserSidebar>
      <div class="card2">
        <br />
        <h2>
          Welcome to Robots {localStorage.getItem("user_fn")}{" "}
          {localStorage.getItem("user_ln")}{" "}
        </h2>
        <br />
        You logged in as an {localStorage.getItem("user_role")}
        <br />
      </div>
      <div class="card2">
        <div class="row">
          <div class="col">
            <div className="form-group">
              <button className="btn btn-outline-primary">Up</button>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <div className="form-group">
              <button className="btn btn-outline-primary">Left</button>
            </div>
          </div>
          <div class="col-4">
            <div className="form-group">
              <button
                // onClick={this.startRobo}
                className="btn btn-outline-primary"
              >
                Start/Stop
              </button>
            </div>
          </div>
          <div class="col-4">
            <div className="form-group">
              <button className="btn btn-outline-primary">Right</button>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div className="form-group">
              <button className="btn btn-outline-primary">Down</button>
            </div>
          </div>
        </div>
      </div>
    </UserSidebar>
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

export default MoveRobot;
