import React from "react";
import CountUp from "react-countup";

// rct card box
import { RctCard } from "Components/RctCard";

const DataBlock = ({ label, amount, money, increase }) => (
  <RctCard>
    <div className="rct-block-title d-flex justify-content-between">
      <div className="d-flex align-items-start">
        <h3>{label}</h3>
      </div>
      <div className="align-items-end">
        <span className="d-block text-muted counter-point">
          {money && "$"}
          <CountUp start={0} end={amount} duration={3} useEasing={true} />
        </span>
        {/* <p className="text-right mb-0 text-muted">+54%</p> */}
      </div>
    </div>
  </RctCard>
);

export default DataBlock;
