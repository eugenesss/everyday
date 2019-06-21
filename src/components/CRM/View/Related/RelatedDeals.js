import React from "react";
import ViewSectionLayout from "Components/CRM/View/Layout/ViewSectionLayout";
import RelatedTable from "./RelatedTable";

const columns = [
  { label: "Name", name: "name" },
  { label: "Amount", name: "amount" },
  { label: "Stage", name: "stage" },
  { label: "Chance", name: "stage" },
  { label: "Closing Date", name: "closingDate" },
  { label: "Type", name: "account" },
  { label: "Owner", name: "account" }
];

const RelatedDeals = ({ deals }) => {
  return (
    <ViewSectionLayout title="Related Deals" bgColorClass="bg-info">
      <RelatedTable columns={columns} tableData={deals} />
    </ViewSectionLayout>
  );
};

export default RelatedDeals;
