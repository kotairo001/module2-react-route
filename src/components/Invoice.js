import React, {useState}  from 'react'
import { useSearchParams } from 'react-router-dom'

function Invoice() {
const [searchParam, setSearchParam] = useSearchParams();
const invoiceId = searchParam.get("id")
// console.log(invoiceId);
const [invoiceList, setInvoiceList] = useState([
    { id: "001", name: "Google" },
    { id: "002", name: "Apple" },
  ]);
  const elementInvoice = invoiceList.map(invoice=> {
    if(invoice.id===invoiceId) {
        return <div key={invoice.id}>
            <p>Invoice for {invoice.name} </p>
        </div>
    }
  })
  return (
    <div>
        {elementInvoice}
    </div>
  )
}

export default Invoice