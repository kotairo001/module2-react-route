import React , { useState } from "react";
import { Outlet } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import Invoice from "./Invoice";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";


function InvoiceList() {
    const navigate = useNavigate();
    const [invoiceList, setInvoiceList] = useState([
      { id: "001", name: "Google" },
      { id: "002", name: "Apple" },
    ]);
    const elementInvoice = invoiceList.map((invoice) => {
      return (
        <div key={invoice.id}>
          <button onClick={() =>
                navigate({
                  pathname: "invoice",
                  search: `?id=${invoice.id}`,
                })
              }>
            <NavLink>
              {invoice.name}
            </NavLink>
          </button>
        </div>
      );
    });
  return (
    <div>
      <p>Invoices</p>
      <NavLink to={"new"}>Create New Invoice</NavLink>
      {elementInvoice}
      <Outlet></Outlet>
    </div>
  );
}

export default InvoiceList;
