import React from "react";
import CoinForm from "../../containers/coinForm/CoinForm";

const FirstPage = () => (
  <div className="container-fluid firstPage">
    <div className="frontLeft col-xs-6" />
    <div className="frontRight col-xs-6">
      <div className="firstPageInfo">
        <CoinForm />
      </div>
    </div>
  </div>
);

export default FirstPage;
