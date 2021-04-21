import React, { useEffect } from "react";
import styled from "styled-components";
const AddCustomer = ({
  biladdattension,
  bilcountry,
  biladdrestreet1,
  biladdrestreet2,
  biladcity,
  bilstate,
  bilzipcode,
  bilphone,
  bilfax,
  shipaddattension,
  shipcountry,
  shipaddrestreet1,
  shipaddrestreet2,
  shipadcity,
  shipstate,
  shipzipcode,
  shipphone,
  shipfax,
  setbiladdattension,
  setbilcountry,
  setbiladdrestreet1,
  setbiladdrestreet2,
  setbiladcity,
  setbilstate,
  setbilzipcode,
  setbilphone,
  setbilfax,
  setshipaddattension,
  setshipcountry,
  setshipaddrestreet1,
  setshipaddrestreet2,
  setshipadcity,
  setshipstate,
  setshipzipcode,
  setshipphone,
  setshipfax,
  country,
}) => {
  useEffect(() => {
    var x = 0;
    var st = " ";
    if (country !== undefined)
      for (x = -1; x < country.length; x++) {
        if (x === -1) {
          var option1 = "<option disabled selected hidden >" + st + "</option>";
          document.getElementById("country").innerHTML += option1;
          continue;
        }
        var option =
          "<option value='" +
          country[x].name +
          "'>" +
          country[x].name +
          "</option>";
        document.getElementById("country").innerHTML += option;
      }
  }, []);

  const biladdattensionHandler = (e) => {
    setbiladdattension(e.target.value);
  };
  const bilcountryHandler = () => {
    var x = document.getElementById("country").selectedIndex;
    setbilcountry(x);
  };
  const biladdrestreet1Handler = (e) => {
    setbiladdrestreet1(e.target.value);
  };
  const biladdrestreet2Handler = (e) => {
    setbiladdrestreet2(e.target.value);
  };
  const biladcityHandler = (e) => {
    setshipadcity(e.target.value);
  };
  const bilstateHandler = () => {
    var x = document.getElementById("country").selectedIndex;
    setbilcountry(x);
  };
  const bilzipcodeHandler = (e) => {
    e.target.value();
  };
  const bilphoneHandler = (e) => {
    e.target.value();
  };
  const bilfaxHandler = (e) => {
    e.target.value();
  };
  const shipaddattensionHandler = (e) => {
    setshipaddattension(e.target.value);
  };
  const shipcountryHandler = () => {
    var x = document.getElementById("country1").selectedIndex;
    setshipcountry(x);
  };
  const shipaddrestreet1Handler = (e) => {
    setshipaddrestreet1(e.target.value);
  };
  const shipaddrestreet2Handler = () => {};
  const shipadcityHandler = () => {};
  const shipstateHandler = () => {};
  const shipzipcodeHandler = () => {};
  const shipphoneHandler = () => {};
  const shipfaxHandler = () => {};

  useEffect(() => {
    var st = "Select";
    var option1 = "<option disabled selected hidden >" + st + "</option>";
    document.getElementById("country").innerHTML += option1;
    document.getElementById("country1").innerHTML += option1;
    document.getElementById("state").innerHTML += option1;
    document.getElementById("state1").innerHTML += option1;
  }, []);

  return (
    <ItemMaking1>
      <Grider>
        <div className="d35">
          <label>BILLING ADDRESS</label>
        </div>
        <div className="d36">
          <label>SHIPPING ADDRESS</label>
        </div>
        <div className="d1">
          <label htmlFor="attention">Attention</label>
        </div>
        <div className="d2">
          <input
            onChange={biladdattensionHandler}
            id="attention"
            value={biladdattension}
            type="text"
          ></input>
        </div>

        <div className="d3">
          <label htmlFor="country">Country</label>
        </div>
        <div className="d4">
          <select
            onChange={bilcountryHandler}
            id="country"
            value={bilcountry}
            type="text"
          ></select>
        </div>

        <div className="d5">
          <label htmlFor="address">Address</label>
        </div>
        <div className="d6">
          <textarea
            onChange={biladdrestreet1Handler}
            id="address1"
            value={biladdrestreet1}
            type="text"
            placeholder="Street 1"
            rows="3"
            cols="23"
          ></textarea>
        </div>
        <div className="d7">
          <textarea
            onChange={biladdrestreet2Handler}
            id="address2"
            value={biladdrestreet2}
            type="text"
            placeholder="Street 2"
            rows="3"
            cols="23"
          ></textarea>
        </div>

        <div className="d8">
          <label htmlFor="city">City</label>
        </div>
        <div className="d9">
          <input
            onChange={biladcityHandler}
            id="city"
            value={biladcity}
            type="text"
          ></input>
        </div>

        <div className="d10">
          <label htmlFor="state">State</label>
        </div>
        <div className="d11">
          <select value={bilstate} onChange={bilstateHandler} id="state">
            <option value="1">Andaman and Nicobar Islands</option>
            <option value="2">Andhra Pradesh</option>
            <option value="3">Arunachal Pradesh</option>
            <option value="4">Assam</option>
            <option value="5">Bihar</option>
            <option value="6">Chandigarh</option>
            <option value="7">Chhattisgarh</option>
            <option value="8">Dadra and Nagar Haveli and Daman and Diu</option>
            <option value="9">Daman and Diu</option>
            <option value="10">Delhi</option>
            <option value="11">Goa</option>
            <option value="12">Gujarat</option>
            <option value="13">Haryana</option>
            <option value="14">Himachal Pradesh</option>
            <option value="15">Jammu and Kashmir</option>
            <option value="16">Jharkhand</option>
            <option value="17">Karnataka</option>
            <option value="18">Kerala</option>
            <option value="19">Ladakh</option>
            <option value="20">Lakshadweep</option>
            <option value="21">Madhya Pradesh</option>
            <option value="22">Maharashtra</option>
            <option value="23">Manipur</option>
            <option value="24">Meghalaya</option>
            <option value="25">Mizoram</option>
            <option value="26">Nagaland</option>
            <option value="27">Odisha</option>
            <option value="28">Puducherry</option>
            <option value="29">Punjab</option>
            <option value="30">Rajasthan</option>
            <option value="31">Sikkim</option>
            <option value="32">Tamil Nadu</option>
            <option value="33">Telangana</option>
            <option value="34">Tripura</option>
            <option value="35">Uttar Pradesh</option>
            <option value="36">West Bengal</option>
          </select>
        </div>

        <div className="d12">
          <label htmlFor="zipcode">Zip Code</label>
        </div>
        <div className="d13">
          <input
            onChange={bilzipcodeHandler}
            id="zipcode"
            value={bilzipcode}
            type="text"
          ></input>
        </div>

        <div className="d14">
          <label htmlFor="phone">Phone</label>
        </div>
        <div className="d15">
          <input
            onChange={bilphoneHandler}
            id="phone"
            value={bilphone}
            type="text"
          ></input>
        </div>

        <div className="d16">
          <label htmlFor="fax">Fax</label>
        </div>
        <div className="d17">
          <input
            onChange={bilfaxHandler}
            id="fax"
            value={bilfax}
            type="text"
          ></input>
        </div>

        <div className="d18">
          <label htmlFor="attention1">Attention</label>
        </div>
        <div className="d19">
          <input
            onChange={shipaddattensionHandler}
            id="attention1"
            value={shipaddattension}
            type="text"
          ></input>
        </div>

        <div className="d20">
          <label htmlFor="country1">Country</label>
        </div>
        <div className="d21">
          <select
            onChange={shipcountryHandler}
            id="country1"
            value={shipcountry}
            type="text"
          ></select>
        </div>

        <div className="d22">
          <label htmlFor="address1">Address</label>
        </div>
        <div className="d23">
          <textarea
            onChange={shipaddrestreet1Handler}
            id="address3"
            value={shipaddrestreet1}
            type="text"
            placeholder="Street 1"
            rows="3"
            cols="23"
          ></textarea>
        </div>
        <div className="d24">
          <textarea
            onChange={shipaddrestreet2Handler}
            id="address4"
            value={shipaddrestreet2}
            type="text"
            placeholder="Street 2"
            rows="3"
            cols="23"
          ></textarea>
        </div>

        <div className="d25">
          <label htmlFor="city1">City</label>
        </div>
        <div className="d26">
          <input
            onChange={shipadcityHandler}
            id="city1"
            value={shipadcity}
            type="text"
          ></input>
        </div>

        <div className="d27">
          <label htmlFor="state1">State</label>
        </div>
        <div className="d28">
          <select value={shipstate} onChange={shipstateHandler} id="state1">
            <option value="1">Andaman and Nicobar Islands</option>
            <option value="2">Andhra Pradesh</option>
            <option value="3">Arunachal Pradesh</option>
            <option value="4">Assam</option>
            <option value="5">Bihar</option>
            <option value="6">Chandigarh</option>
            <option value="7">Chhattisgarh</option>
            <option value="8">Dadra and Nagar Haveli and Daman and Diu</option>
            <option value="9">Daman and Diu</option>
            <option value="10">Delhi</option>
            <option value="11">Goa</option>
            <option value="12">Gujarat</option>
            <option value="13">Haryana</option>
            <option value="14">Himachal Pradesh</option>
            <option value="15">Jammu and Kashmir</option>
            <option value="16">Jharkhand</option>
            <option value="17">Karnataka</option>
            <option value="18">Kerala</option>
            <option value="19">Ladakh</option>
            <option value="20">Lakshadweep</option>
            <option value="21">Madhya Pradesh</option>
            <option value="22">Maharashtra</option>
            <option value="23">Manipur</option>
            <option value="24">Meghalaya</option>
            <option value="25">Mizoram</option>
            <option value="26">Nagaland</option>
            <option value="27">Odisha</option>
            <option value="28">Puducherry</option>
            <option value="29">Punjab</option>
            <option value="30">Rajasthan</option>
            <option value="31">Sikkim</option>
            <option value="32">Tamil Nadu</option>
            <option value="33">Telangana</option>
            <option value="34">Tripura</option>
            <option value="35">Uttar Pradesh</option>
            <option value="36">West Bengal</option>
          </select>
        </div>

        <div className="d29">
          <label htmlFor="zipcode1">Zip Code</label>
        </div>
        <div className="d30">
          <input
            onChange={shipzipcodeHandler}
            id="zipcode1"
            value={shipzipcode}
            type="text"
          ></input>
        </div>
        <div className="d31">
          <label htmlFor="phone1">Phone</label>
        </div>
        <div className="d32">
          <input
            onChange={shipphoneHandler}
            id="phone1"
            value={shipphone}
            type="text"
          ></input>
        </div>
        <div className="d33">
          <label htmlFor="fax1">Fax</label>
        </div>
        <div className="d34">
          <input
            onChange={shipfaxHandler}
            id="fax1"
            value={shipfax}
            type="text"
          ></input>
        </div>
      </Grider>
    </ItemMaking1>
  );
};

const ItemMaking1 = styled.div`
  label {
    font-size: 13px;
    width: 100%;
    height: 100%;
  }
  font-size: 13px;
`;
const Grider = styled.div`
  display: grid !important;
  grid-gap: 2rem;
  .d1 {
    grid-area: d1;
  }
  .d2 {
    grid-area: d2;
    input {
      padding: 5px 8px;
    }
  }
  .d3 {
    grid-area: d3;
  }
  .d4 {
    grid-area: d4;
    select {
      padding: 5px 30px 5px 8px;
    }
  }
  .d5 {
    grid-area: d5;
  }
  .d6 {
    grid-area: d6;
    textarea {
      padding: 5px 8px;
    }
  }
  .d7 {
    grid-area: d7;
    textarea {
      padding: 5px 8px;
    }
  }
  .d8 {
    grid-area: d8;
  }
  .d9 {
    grid-area: d9;
    input {
      padding: 5px 8px;
    }
  }
  .d10 {
    grid-area: d10;
  }
  .d11 {
    grid-area: d11;
    select {
      padding: 5px 30px 5px 8px;
      width: 53%;
    }
  }
  .d12 {
    grid-area: d12;
  }
  .d13 {
    grid-area: d13;
    input {
      padding: 5px 8px;
    }
  }
  .d14 {
    grid-area: d14;
  }
  .d15 {
    grid-area: d15;
    input {
      padding: 5px 8px;
    }
  }
  .d16 {
    grid-area: d16;
  }
  .d17 {
    grid-area: d17;
    input {
      padding: 5px 8px;
    }
  }
  .d18 {
    grid-area: d18;
  }
  .d19 {
    grid-area: d19;
    input {
      padding: 5px 8px;
    }
  }
  .d20 {
    grid-area: d20;
  }
  .d21 {
    grid-area: d21;
    select {
      padding: 5px 30px 5px 8px;
    }
  }
  .d22 {
    grid-area: d22;
  }
  .d23 {
    grid-area: d23;
    textarea {
      padding: 5px 8px;
    }
  }
  .d24 {
    grid-area: d24;
    textarea {
      padding: 5px 8px;
    }
  }
  .d25 {
    grid-area: d25;
  }
  .d26 {
    grid-area: d26;
    input {
      padding: 5px 8px;
    }
  }
  .d27 {
    grid-area: d27;
  }
  .d28 {
    grid-area: d28;
    select {
      padding: 5px 30px 5px 8px;
      width: 53%;
    }
  }
  .d29 {
    grid-area: d29;
  }
  .d30 {
    grid-area: d30;
    input {
      padding: 5px 8px;
    }
  }
  .d31 {
    grid-area: d31;
  }
  .d32 {
    grid-area: d32;
    input {
      padding: 5px 8px;
    }
  }
  .d33 {
    grid-area: d33;
  }
  .d34 {
    grid-area: d34;
    input {
      padding: 5px 8px;
    }
  }
  .d35 {
    grid-area: d35;
  }
  .d36 {
    grid-area: d36;
  }
  grid-template-areas:
    ". d35   .  d36    . . . "
    ".  .    .   .     . . . "
    ". d1   d2  d18  d19 . . "
    ". d3   d4  d20  d21 . . "
    ". d5   d6  d22  d23 . . "
    ". .    d7  .    d24 . . "
    ". d8   d9  d25  d26 . . "
    ". d10 d11  d27  d28 . . "
    ". d12 d13  d29  d30 . . "
    ". d14 d15  d31  d32 . . "
    ". d16 d17  d33  d34 . . ";
`;
export default AddCustomer;
