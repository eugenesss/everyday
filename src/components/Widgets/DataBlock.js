import React from "react";
import CountUp from "react-countup";
import NumberFormat from "react-number-format";

// rct card box
import { RctCard } from "Components/RctCard";

const DataBlock = ({ label, amount, money }) => (
  <RctCard>
    <div className="rct-block-title d-flex justify-content-between">
      <div className="d-flex align-items-start">
        <h2>{label}</h2>
      </div>
      <div className="align-items-end">
        <h2 className="d-block text-muted counter-point">
          {money ? (
            <NumberFormat
              value={amount}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          ) : (
            <CountUp start={0} end={amount} duration={1} useEasing={true} />
          )}
        </h2>
      </div>
    </div>
  </RctCard>
);

export default DataBlock;
