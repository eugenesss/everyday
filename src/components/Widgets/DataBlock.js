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
        <h2 className="d-block text-muted counter-point">
          {money && "$"}
          <CountUp start={0} end={amount} duration={1} useEasing={true} />
        </h2>
        {/* <p className="text-right mb-0 text-muted">+54%</p> */}
      </div>
    </div>
  </RctCard>
);

export default DataBlock;
