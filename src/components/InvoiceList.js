import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteInvoice } from "../redux/reducers/invoiceRedux";
import { BiTrash,BiAddToQueue } from "react-icons/bi";

const InvoiceList = () => {
  const invoiceList = useSelector(state=>state.invoices)
  const dispatch= useDispatch()
  const navigate = useNavigate();

  const deleteItem=(e,id)=>{
    e.stopPropagation()
    dispatch(deleteInvoice(id))
  }
  return (
    <div>
      <h1 className="text-center mt-2">Invoice Generator</h1>
      <div className="p-5 mt-3 d-flex flex-wrap align-items-center justify-content-center">
        <button
          className="m-3 p-3 bg-gray text-white bg-dark rounded shadow-lg d-flex align-items-center justify-content-center cursor-pointer"
          style={{ height: "200px", width: "300px" }}
          onClick={() => navigate("/create")}
        >
          <h3>
          <BiAddToQueue style={{height: '100px', width: '100px', padding: '7.5px'}} className="text-white mt-1"/>
          </h3>
        </button>

        {invoiceList.map((invoice)=>{
          return (
            <button
              key={invoice.id}
              onClick={() => navigate(`/edit/${invoice.id}`)}
              className="m-3 p-3 bg-gray text-dark bg-light rounded shadow-lg d-flex flex-column flex align-items-center justify-content-center cursor-pointer"
              style={{ height: "200px", width: "300px" }}
            >
                <h3>Invoice No. {invoice.invoiceNumber}</h3>
                <h5>Bill To: {invoice.billTo}</h5>
                <h5>Bill From: {invoice.billFrom}</h5>
                <h5>Total: {invoice.total} {invoice.currency}</h5>
                <button className="btn btn-danger" onClick={(e)=>deleteItem(e,invoice.id)}>
                <BiTrash style={{height: '20px', width: '20px', padding: '0px'}} className="text-white btn btn-danger"/>
                </button>

            </button>
          )
        })}
        
      </div>
    </div>
  );
};

export default InvoiceList;
