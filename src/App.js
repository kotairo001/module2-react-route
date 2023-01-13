import "./App.css";
import { Routes, Route } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import InvoiceList from "./components/InvoiceList";
import Expense from "./components/Expense";

function App() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to={"invoiceList"}>InvoiceList</NavLink>
        </li>
        <li>
          <NavLink to={"expense"}>Expense</NavLink>
        </li>
      </ul>
      <Outlet></Outlet>
    </div>
    // <Routes>
    //   <Route path="/invoiceList" element={<InvoiceList />}></Route>
    //   <Route path="/expense" element={<Expense />}></Route>
    // </Routes>
  );
}

export default App;
