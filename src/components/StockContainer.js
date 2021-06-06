import React from "react";
import Stock from "./Stock";

function StockContainer({stocks}) {
  return (
    <div>
      <h2>Stocks</h2>
      {/* render stock list here*/}
      <Stock />
      <Stock />
    </div>
  );
}

export default StockContainer;
