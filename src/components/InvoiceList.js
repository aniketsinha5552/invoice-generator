import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteInvoice,duplicateInvoice } from "../redux/reducers/invoiceRedux";
import { BiTrash, BiAddToQueue,BiLayer } from "react-icons/bi";

const InvoiceList = () => {
  const invoiceList = useSelector((state) => state.invoices);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteItem = (e, id) => {
    e.stopPropagation();
    dispatch(deleteInvoice(id));
  };

  const duplicateItem=(e,id)=>{
    e.stopPropagation();
    dispatch(duplicateInvoice(id))
  }
  return (
    <div className="p-3">
      <h1 className="text-center mt-2">Invoice Generator</h1>
      <h2 className="text-center text-secondary">A simple app to generate and manage invoices</h2>
      <div className="p-5 mt-3 d-flex flex-wrap align-items-center justify-content-start">
        <button
          title="Create New Invoice"
          className="m-3 p-3 bg-gray text-white bg-dark rounded shadow-lg d-flex align-items-center justify-content-center cursor-pointer"
          style={{ height: "200px", width: "300px" }}
          onClick={() => navigate("/create")}
        >
          <h3>
            <BiAddToQueue
              style={{ height: "100px", width: "100px", padding: "7.5px" }}
              className="text-white mt-1"
            />
          </h3>
        </button>

        {invoiceList.map((invoice) => {
          return (
            <button
              key={invoice.id}
              onClick={() => navigate(`/edit/${invoice.id}`)}
              className="m-3 p-3 border-0 bg-gray text-dark bg-light rounded shadow-lg d-flex flex-column flex align-items-left justify-content-center cursor-pointer position-relative"
              style={{ height: "200px", width: "300px" }}
              title="Click to veiw/edit invoice"
            >
              <h5>
                <span className="text-secondary">Invoice No: </span>{" "}
                {invoice.invoiceNumber}
              </h5>
              <h5>
                <span className="text-secondary">Date: </span>{" "}
                {invoice.dateOfIssue}
              </h5>
              <h5>
                <span className="text-secondary">To: </span> {invoice.billTo}
              </h5>
              <h5>
                <span className="text-secondary">From: </span>{" "}
                {invoice.billFrom}
              </h5>
              <h5>
                <span className="text-secondary">Total: </span> {invoice.total}{" "}
                {invoice.currency}
              </h5>
              <button
                title="Delete Invoice"
                className="btn btn-danger position-absolute bottom-0 end-0 m-2"
                onClick={(e) => deleteItem(e, invoice.id)}
              >
                <BiTrash
                  style={{ height: "20px", width: "20px", padding: "0px" }}
                  className="text-white btn btn-danger"
                />
              </button>
              <button
                title="Duplicate Invoice"
                className="btn btn-primary position-absolute top-0 end-0 m-2"
                onClick={(e) => duplicateItem(e, invoice.id)}
              >
                <BiLayer
                  style={{ height: "20px", width: "20px", padding: "0px" }}
                  className="text-white btn btn-primary"
                />
              </button>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default InvoiceList;
