import React from "react";
import Stock from "./Stock";

function StockContainer({stocks}) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocks && (
        <>
      {/* render stock list here*/}
          <Stock stock={stocks[0]}/>
          <Stock stock={stocks[1]}/>
        </>
      )}
    </div>
  );
}

export default StockContainer;
