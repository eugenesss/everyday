import React from "react";
import NumberFormat from "react-number-format";

const DealCard = ({ name, stage, chance, type, ownerName, amount }) => {
  return (
    <div className="lazy-up">
      <div
        className="card text-white"
        style={{ padding: "2% 4%", background: "#3c537b" }}
      >
        <div className="media">
          <div className="media-body d-flex justify-content-between mlr-10">
            <div className="mt-15">
              <h1 className="mb-10">{name}</h1>
              <p className="mb-5 d-block">
                <span className="mr-1">{`${stage} - ${chance}%`}</span>
                <span className="mr-1">{type}</span>
              </p>
              <span className="d-block fs-12">Owner - {ownerName}</span>
            </div>
            <div className="mt-30">
              <h1 className="text-white">
                <NumberFormat
                  value={amount}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealCard;
