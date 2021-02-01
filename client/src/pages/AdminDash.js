import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { FaUserCircle, FaUserEdit } from "react-icons/fa";
import { BiMoveHorizontal } from "react-icons/bi";
import { BsHouseFill } from "react-icons/bs";
import { FaHouseDamage } from "react-icons/fa";
// import { GrHostMaintenance } from "react-icons/gr";
import { useSelector, useDispatch } from "react-redux";
// import { useQuery } from "@apollo/react-hooks";
import { UPDATE_PROPERTIES } from "../utils/actions";
// import { QUERY_PROPERTIES } from "../utils/queries";
import { idbPromise } from "../utils/helpers";
// import button from "@material-ui/core/button";

function AdminDash() {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-header">Manage your Tenants and Properties</h3>
      </div>
      <div className="card-body">
        <button className="btnNav  id=button-hover">
          <Link to="/AdminDash/CreateUser">
            <FaUserCircle size={30} color="var(--dark)"></FaUserCircle> <br />
            <b>Create User</b>
          </Link>
        </button>
        <br />
        <br />
        <button className="btnNav  id=button-hover">
          <Link to="/AdminDash/CreateProperty">
            <BsHouseFill size={30} color="var(--dark)"></BsHouseFill>
            <br />
            <b>Create Property</b>
          </Link>
        </button>
        <br />
        <br />
        <button className="btnNav  id=button-hover">
          <Link to="/AdminDash/UpdateProperty">
            <FaHouseDamage size={30} color="var(--dark)"></FaHouseDamage> <br />
            <b>Update Properties</b>
          </Link>
        </button>
        <br />
        <br />
        <button className="btnNav   id=button-hover">
          <Link to="/AdminDash/MoveUser">
            <BiMoveHorizontal size={30} color="var(--dark)"></BiMoveHorizontal>{" "}
            <br />
            <b>Move Tenant</b>
          </Link>
        </button>
      </div>
    </div>
  );
}

// return (
//   <div className="flex-row">
//     <header>
//       <div>{showNavigation()}</div>
//     </header>

//     {/* <div >
//       <h1> Content goes here</h1>
//     </div>
//     <div>
//       <h1>Bulletin Board</h1>
//     </div> */}
//   </div>
// );
// }

export default AdminDash;
