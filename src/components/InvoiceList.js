import React from "react";
import { useNavigate } from "react-router-dom";

const InvoiceList = () => {
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
        <button
          className="m-3 p-3 bg-gray text-dark bg-light rounded shadow-lg d-flex align-items-center justify-content-center cursor-pointer"
          style={{ height: "200px", width: "300px" }}
        >
          <h3>Invoice Info</h3>
        </button>
      </div>
    </div>
  );
};

export default InvoiceList;
