import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import InvoiceList from "./components/InvoiceList";
import Invoice from "./components/Invoice";
import NewInvoice from "./components/NewInvoice";
import Expense from "./components/Expense";
import NotFound from "./components/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="invoiceList" element={<InvoiceList />}>
          <Route path=":new" element={<NewInvoice></NewInvoice>}></Route>
          <Route path="invoice" element={<Invoice />}></Route>
        </Route>
        <Route path="expense" element={<Expense />}></Route>
      </Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
