import { Button } from "@mui/material";
import React from "react";
import CurrencyFormat from "react-currency-format";

import "./total.css";
import { useStateValue } from "../datalayer/StateProvider";
import { getBasketTotal } from "../datalayer/reducer";

function Total() {
  const [{ basket }, dispatch] = useStateValue();
  const getTotal = getBasketTotal(basket);
  return (
    <div className="total">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ( {basket?.length} item ): <strong>{value}</strong>
            </p>
            <small className="total__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getTotal}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <Button> Continue to checkout</Button>
    </div>
  );
}

export default Total;
