import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const InvoiceList = () => {
  const invoiceList = useSelector(state=>state.invoices)
  console.log(invoiceList)
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-center mt-2">Invoice Generator</h1>
      <div className="p-5 mt-3 d-flex flex-wrap align-items-center justify-content-center">
        <button
          className="m-3 p-3 bg-gray text-white bg-dark rounded shadow-lg d-flex align-items-center justify-content-center cursor-pointer"
          style={{ height: "200px", width: "300px" }}
          onClick={() => navigate("/create")}
        >
          <h3>New Invoice</h3>
        </button>

        {invoiceList.map((invoice,index)=>{
          return (
            <button
              key={index}
              className="m-3 p-3 bg-gray text-dark bg-light rounded shadow-lg d-flex flex-column flex align-items-center justify-content-center cursor-pointer"
              style={{ height: "200px", width: "300px" }}
            >
                <h3>Invoice No. {invoice.invoiceNumber}</h3>
                <h5>Bill To: {invoice.billTo}</h5>
                <h5>Bill From: {invoice.billFrom}</h5>
                <h5>Total: {invoice.total} {invoice.currency}</h5>            
            </button>
          )
        })}
        
      </div>
    </div>
  );
};

export default InvoiceList;
