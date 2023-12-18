import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.css";
import "./Voucher.css";
import axios from "axios";

function Voucher() {
  const [inputArrData, setInputArrData] = useState([]);
  const [inputData, setInputData] = useState({
    voucherDate: "",
    voucherCurrency: [],
    exchangeRate: "",
    narration: "",
    voucherPrice: "",
    voucherType: [],
  });

  const currencyOptions = [
    { value: "PKR", lable: "PKR" },
    { value: "USD", lable: "USD" },
  ];

  const typeOptions = [
    { value: "Debit", label: "Debit" },
    { value: "Credit", label: "Credit" },
  ];

  const handleInput = (e) => {
    e.preventDefault();
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  let {
    voucherDate,
    voucherCurrency,
    exchangeRate,
    narration,
    voucherPrice,
    voucherType,
  } = inputData;
  const changeHandleInputArr = (e) => {
    e.preventDefault();
    setInputArrData([
      ...inputArrData,
      {
        voucherDate,
        voucherCurrency,
        exchangeRate,
        narration,
        voucherPrice,
        voucherType,
      },
    ]);

    setInputData({
      voucherDate: "",
      voucherCurrency: [],
      exchangeRate: "",
      narration: "",
      voucherPrice: "",
      voucherType: [],
    });

    console.log(inputArrData);
    console.log(inputData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/voucher/addVoucher", inputArrData)
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <>
      <div className="container">
        <form action="" onSubmit={handleSubmit}>
          <div className="card">
            <div className="card-header">
              <div className="row">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-6">
                      <h3>Create Voucher</h3>
                    </div>
                    <div
                      className="col-md-6 p-3"
                      style={{ textAlign: "right" }}
                    >
                      <button
                        className="btn btn-primary"
                        onClick={changeHandleInputArr}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <div className="row p-2">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Voucher Id</label>
                        <input
                          type="text"
                          value=""
                          onChange={handleInput}
                          className="form-control p-2"
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Voucher Date</label>
                        <input
                          type="date"
                          name="voucherDate"
                          value={inputData.voucherDate}
                          onChange={handleInput}
                          className="form-control p-2"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row p-2">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>voucherCurrency</label>
                        <select
                          name="voucherCurrency"
                          className="form-select item"
                          id=""
                          value={inputData.voucherCurrency}
                          onChange={handleInput}
                        >
                          {currencyOptions.map((item) => (
                            <option value={item.value}>{item.lable}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Exchange Rate</label>
                        <input
                          type="text"
                          name="exchangeRate"
                          value={inputData.exchangeRate}
                          onChange={handleInput}
                          className="form-control p-2"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row p-2">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Pay/Recieve To</label>
                        <input
                          type="text"
                          name="narration"
                          value={inputData.narration}
                          onChange={handleInput}
                          className="form-control p-2"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>voucherPrice</label>
                        <input
                          type="text"
                          name="voucherPrice"
                          value={inputData.voucherPrice}
                          onChange={handleInput}
                          className="form-control p-2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <table className="table table-bordered ">
                <thead>
                  <tr>
                    <th>Narration</th>
                    <th>Type</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {inputArrData.map((item, index) => (
                    <tr key={index}>
                      <td>{item.narration}</td>
                      <td>
                        <select
                          name="voucherType"
                          className="form-select item"
                          value={inputData.voucherType}
                          onChange={handleInput}
                        >
                          {typeOptions.map((item) => (
                            <option value={item.value}>{item.label}</option>
                          ))}
                        </select>
                      </td>
                      <td>{item.voucherPrice}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Voucher;
