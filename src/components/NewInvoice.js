import React from "react";
import { NavLink, Link } from "react-router-dom";

function NewInvoice() {

  return (
    <div>
      <p>New Invoice Name</p>
      <input type={"text"}></input>
      <button>
        <NavLink to={":invoice"}>Create New Invoice</NavLink>
      </button>
    </div>
  );
}

export default NewInvoice;
