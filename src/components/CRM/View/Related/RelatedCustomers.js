import React from "react";
import { NavLink } from "react-router-dom";
import ViewSectionLayout from "Components/CRM/View/Layout/ViewSectionLayout";
import RelatedTable from "./RelatedTable";
import { singleCustomer } from "Helpers/url/crmRoutes";

const columns = [
  {
    name: "id",
    options: {
      display: "excluded",
      filter: false,
      sort: false,
      download: false
    }
  },
  {
    label: "Customer Name",
    name: "name",
    options: {
      customBodyRender: (value, tableMeta) => {
        return (
          <NavLink to={singleCustomer(tableMeta.rowData[0])}>{value}</NavLink>
        );
      }
    }
  },
  {
    label: "Email",
    name: "baseContact",
    options: {
      customBodyRender: value => {
        return value ? value.email : " ";
      }
    }
  },
  {
    label: "Mobile",
    name: "baseContact",
    options: {
      customBodyRender: value => {
        return value ? value.mobile : " ";
      }
    }
  },
  {
    label: "Office",
    name: "baseContact",
    options: {
      customBodyRender: value => {
        return value ? value.phone : " ";
      }
    }
  }
];

const RelatedCustomers = ({ customers }) => {
  return (
    <ViewSectionLayout title="Related Customer" bgColorClass="bg-secondary">
      <RelatedTable columns={columns} tableData={customers} />
    </ViewSectionLayout>
  );
};

export default RelatedCustomers;
