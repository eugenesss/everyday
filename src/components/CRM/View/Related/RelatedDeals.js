import React from "react";
import { NavLink } from "react-router-dom";
import ViewSectionLayout from "Components/CRM/View/Layout/ViewSectionLayout";
import RelatedTable from "./RelatedTable";
import AddNewButton from "Components/Everyday/AddNewButton";
import NumberFormat from "react-number-format";
import { getTheDate } from "Helpers/helpers";
import { singleDeal } from "Helpers/url/crm";
import StatusBadge from "Components/Everyday/StatusBadge/StatusBadge";

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
    label: "Deal Name",
    name: "name",
    options: {
      customBodyRender: (value, tableMeta) => {
        return <NavLink to={singleDeal(tableMeta.rowData[0])}>{value}</NavLink>;
      }
    }
  },
  {
    label: "Amount",
    name: "amount",
    options: {
      customBodyRender: value => {
        return (
          <NumberFormat
            value={value}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
        );
      }
    }
  },
  {
    label: "Stage",
    name: "stageInfo",
    options: {
      customBodyRender: value => {
        return value ? (
          <StatusBadge name={value.name} color={value.color} />
        ) : (
          ""
        );
      }
    }
  },
  {
    label: "Chance",
    name: "stageInfo",
    options: {
      filter: false,
      display: false,
      customBodyRender: value => {
        return value ? value.chance : "";
      }
    }
  },
  {
    label: "Source",
    name: "sourceInfo",
    options: {
      customBodyRender: value => {
        return value ? value.name : "";
      }
    }
  },
  {
    label: "Type",
    name: "typeInfo",
    options: {
      customBodyRender: value => {
        return value ? value.name : "";
      }
    }
  },
  {
    label: "Closing Date",
    name: "closingDate",
    options: {
      customBodyRender: value => {
        return getTheDate(value);
      }
    }
  }
];

const RelatedDeals = ({ deals, handleNewDeal }) => {
  return (
    <ViewSectionLayout title="Related Deals" bgColorClass="bg-info">
      <RelatedTable columns={columns} tableData={deals} />
      <AddNewButton handleOnClick={handleNewDeal} label="+ New Deal" />
    </ViewSectionLayout>
  );
};

export default RelatedDeals;
