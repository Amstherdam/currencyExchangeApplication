import React, { useEffect } from "react";
import "../css/abbreviations.css";
import { v4 as uuidv4 } from 'uuid';
import { FaCircle } from "react-icons/fa";

const abbreviationsObj = [
  {
    shortName: "AUD",
    name: "Australian Dollar",
  },
  {
    shortName: "BGN",
    name: "Bulgarian Lev ",
  },
  {
    shortName: "BRL",
    name: "Brazilian Real",
  },
  {
    shortName: "CAD",
    name: "Canadian Dollar",
  },
  {
    shortName: "CHF",
    name: "Swiss Franc",
  },
  {
    shortName: "CNY",
    name: "Chinese Yuan",
  },
  {
    shortName: "CZK",
    name: "Czech Crown",
  },
  {
    shortName: "DKK",
    name: "Danish Krone",
  },
  {
    shortName: "EUR",
    name: "Euro",
  },
  {
    shortName: "GBP",
    name: "British Pound Sterling",
  },
  {
    shortName: "HKD",
    name: "Hong Kong Dollar",
  },
  {
    shortName: "HRK",
    name: "Croatian Kuna",
  },
  {
    shortName: "HUF",
    name: "Hungarian Forint",
  },
  {
    shortName: "IDR",
    name: "Indonesian Rupiah",
  },
  {
    shortName: "ILS",
    name: "Israeli New Shekel",
  },
  {
    shortName: "INR",
    name: "Indian Rupee",
  },
  {
    shortName: "ISK",
    name: "Icelandic Krona",
  },
  {
    shortName: "JPY",
    name: "Japanese Yen",
  },
  {
    shortName: "KRW",
    name: "South Korean Won",
  },
  {
    shortName: "MXN",
    name: "Mexican Peso",
  },
  {
    shortName: "MYR",
    name: "Malaysian Ringgit",
  },
  {
    shortName: "NOK",
    name: "Norwegian Krone",
  },
  {
    shortName: "NZD",
    name: "New Zealand Dollar",
  },
  {
    shortName: "PHP",
    name: "Philippine Peso",
  },
  {
    shortName: "PLN",
    name: "Polish Zloty",
  },
  {
    shortName: "RON",
    name: "Romanian Leu",
  },
  {
    shortName: "RUB",
    name: "Russian Ruble",
  },
  {
    shortName: "SEK",
    name: "Swedish Krona",
  },
  {
    shortName: "SGD",
    name: "Singapore Dollar",
  },
  {
    shortName: "THB",
    name: "Thai Baht",
  },
  {
    shortName: "TRY",
    name: "Turkish Lira",
  },
  {
    shortName: "USD",
    name: "United States Dollar",
  },
  {
    shortName: "ZAR",
    name: "South African Rand",
  },
];

const denem = () =>  {
  abbreviationsObj.map((item ) => { 
    const deneme = 'id'
    item[deneme] = uuidv4();
  })

  console.log(abbreviationsObj)
}

denem()

function Abbreviations() {
  return (
    
    <div className="fullName-container">
      {abbreviationsObj.map((item, index) => (
        <div key={index} className="fullName-div">
          <p key={item.id}><FaCircle className="circle" />{item.shortName}:</p>
          <p className="fullName" key={(item.id + 1)}>
            {item.name}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Abbreviations;
