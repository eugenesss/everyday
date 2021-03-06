import React from "react";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";

import { kFormatter } from "Helpers/helpers";

// rct card box
import { RctCard } from "Components/RctCard";

const DataBlock = ({ label, amount, loading }) => (
  <RctCard>
    {loading && <RctSectionLoader />}
    <div className="d-flex justify-content-center py-20">
      <div className="text-center">
        <h2 className="d-block counter-point">{kFormatter(amount)}</h2>
        <p className="text-muted">{label}</p>
      </div>
    </div>
  </RctCard>
);

export default DataBlock;
