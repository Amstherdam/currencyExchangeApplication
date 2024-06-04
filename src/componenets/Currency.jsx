import React, { useEffect, useState } from "react";
import "../css/currency.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import axios from "axios";


const API_KEY = "fca_live_zRhZZ7ZSsoXeAJipoxrYe4CLxeQYV6pg5etGcYyr";
const BASE_URL = "https://api.freecurrencyapi.com/v1/latest";

function Currency() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("AUD");
  const [toCurrency, setToCurrency] = useState("AUD");
  const [result, setResult] = useState(0);
  const [currencyList, setCurrencyList] = useState([]);

  useEffect(() => {
    let myData;
    let myDataKey;

    const axiosList = async () => {
      const list = await axios.get(`${BASE_URL}?apikey=${API_KEY}`);
      myData = list.data.data;
      myDataKey = Object.keys(myData);
      setCurrencyList(myDataKey);
    };

    axiosList();
  }, []);

  const exchange = async () => {
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`
    );

    const responsePower = (response.data.data[toCurrency] * amount).toFixed(2);
    setResult(responsePower);
  };

  return (
    <div className="currency-div">
      <div className="container-currency">
        <h2 className="title">CURRENCY EXCHANGE  APPLICATION</h2>

        <div className="calculation-section">
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            className="amount"
          />
          <select
            onChange={(e) => setFromCurrency(e.target.value)}
            className="from-currency-option"
          >
            {/* <option value="">USD</option>
    <option value="">EUR</option>
    <option value="">TL</option> */}

            {currencyList.map((listElement, index) => (
              <option key={index}>{listElement}</option>
            ))}
          </select>

          <FaLongArrowAltRight style={{ fontSize: "28px", color: "#090900" }} />

          <select
            onChange={(e) => setToCurrency(e.target.value)}
            className="to-currency-option"
          >
            {currencyList.map((listElement, index) => (
              <option key={index}>{listElement}</option>
            ))}
          </select>

          <input
            value={result}
            onChange={(e) => setResult(e.target.value)}
            type="number"
            className="result"
          />
        </div>

        <div>
          <button onClick={exchange}>EXCHANGE</button>
        </div>
      </div>

     
    </div>
  );
}

export default Currency;
