import React from "react";
import ViewSectionLayout from "Components/CRM/View/Layout/ViewSectionLayout";
import RelatedTable from "./RelatedTable";

const columns = [
  { label: "Customer Name", name: "name" },
  { label: "Email", name: "amount" },
  { label: "Mobile", name: "stage" },
  { label: "Fax", name: "stage" }
];

const RelatedCustomers = ({ customers }) => {
  return (
    <ViewSectionLayout title="Related Customer" bgColorClass="bg-secondary">
      <RelatedTable columns={columns} tableData={customers} />
    </ViewSectionLayout>
  );
};

export default RelatedCustomers;
