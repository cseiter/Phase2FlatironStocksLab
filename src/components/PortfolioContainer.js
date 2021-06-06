import React from "react";
import Stock from "./Stock";

function PortfolioContainer({stocks}) {

  function populateStocks() {
    return stocks.map((stock,idx) => (
      <Stock stock={stock} key={`portfolio-stock-${idx}`} />
    ));
  }
  
  return (
    <div>
      <h2>My Portfolio</h2>
      {stocks && populateStocks()}
    </div>
  );
}

export default PortfolioContainer;
