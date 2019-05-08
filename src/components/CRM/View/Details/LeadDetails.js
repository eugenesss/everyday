import React from "react";
import { Table } from "reactstrap";
import DetailsHeader from "./DetailsHeader";
/* import LeadStatusBadge from "Components/CRM/Leads/LeadStatusBadge";
import LeadSourceBadge from "Components/CRM/Leads/LeadSourceBadge";
import LeadInterestLevel from "Components/CRM/Leads/LeadInterestLevel"; */
import CreatedBy from "Components/Everyday/CreatedBy";

const LeadDetails = ({ lead }) => {
  return (
    <React.Fragment>
      <DetailsHeader title="Lead Details" />
      <div className="pb-10">
        <Table className="b-0" borderless>
          <tbody>
            <tr>
              <td className="text-right">
                <strong>Owner</strong>
              </td>
              <td>owner name</td>
              <td className="text-right">
                <strong>Company</strong>
              </td>
              <td>company name</td>
            </tr>
            <tr>
              <td className="text-right">
                <strong>Status</strong>
              </td>
              <td>Status</td>
              <td className="text-right">
                <strong>Email</strong>
              </td>
              <td>emailadd</td>
            </tr>
            <tr>
              <td className="text-right">
                <strong>Source</strong>
              </td>
              <td>source</td>
              <td className="text-right">
                <strong>Job Title</strong>
              </td>
              <td>title</td>
            </tr>
            <tr>
              <td className="text-right">
                <strong>Office</strong>
              </td>
              <td>office</td>
              <td className="text-right">
                <strong>Fax</strong>
              </td>
              <td>fas</td>
            </tr>
            <tr>
              <td className="text-right">
                <strong>Industry</strong>
              </td>
              <td>indxs</td>
            </tr>
            <tr>
              <td className="text-right">
                <strong>Interest Level</strong>
              </td>
              <td>interest</td>
            </tr>
            {/*  <tr>
              <td className="text-right">
                <strong>Last Modified By</strong>
              </td>
              <td>
                <CreatedBy
                  modifiedBy={lead.modifiedBy}
                  modifiedAt={lead.modifiedAt}
                />
              </td>
              <td className="text-right">
                <strong>Created By</strong>
              </td>
              <td>
                <CreatedBy
                  createdAt={lead.createdAt}
                  createdBy={lead.createdBy}
                />
              </td>
            </tr> */}
          </tbody>
        </Table>
      </div>
    </React.Fragment>
  );
};

export default LeadDetails;
