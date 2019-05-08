import React from "react";
import DetailsHeader from "./DetailsHeader";
import { Table } from "reactstrap";

const AddressDetails = ({ contact }) => {
  return (
    <React.Fragment>
      <DetailsHeader title="Address Details" />
      <Table className="b-0" borderless>
        <tbody>
          <tr>
            <td className="text-right">
              <strong>Address</strong>
            </td>
            <td colSpan={5}>contact</td>
          </tr>
          <tr>
            <td className="text-right">
              <strong>Address 2</strong>
            </td>
            <td colSpan={5}>add2</td>
          </tr>
          <tr>
            <td className="text-right">
              <strong>City</strong>
            </td>
            <td>city</td>
            <td className="text-right">
              <strong>State</strong>
            </td>
            <td>state</td>
            <td className="text-right">
              <strong>Zip</strong>
            </td>
            <td>zip</td>
          </tr>
        </tbody>
      </Table>
    </React.Fragment>
  );
};

export default AddressDetails;
