import React from "react";
import { Link } from "react-router-dom";
import {
  Wrapper,
  Contact,
  KeyDetails,
  Info
} from "Components/Everyday/Layout/View/ProfileCard";
import { EventOutlined, CalendarToday } from "@material-ui/icons";
import { singleAccount } from "Helpers/url/crm";

import { getTheDate, getEventTime } from "Helpers/helpers";

function showEvents(events) {
  var showInfo =
    events.length > 0 ? (
      events
        .slice(0, 3)
        .map((event, key) => (
          <Info
            key={key}
            icon={<CalendarToday fontSize="small" />}
            title={event.title}
            subtitle={`${getTheDate(event.start)} - ${getEventTime(
              event.start,
              event.allDay
            )}`}
          />
        ))
    ) : (
      <p className="text-center text-muted">No events upcoming</p>
    );

  return showInfo;
}

function CustomerCard(props) {
  const { cust } = props;
  return (
    <Wrapper>
      <Contact
        name={cust.name}
        call={cust.baseContact.mobile}
        email={cust.baseContact.email}
        website={cust.baseContact.website}
        indicator={
          cust.isActive
            ? { classes: "border-success text-success", name: "Active" }
            : { classes: "border-danger text-danger", name: "Inactive" }
        }
      />
      <div className="profile-card-section">
        <div className="profile-heading">
          <EventOutlined />
          Upcoming Events
        </div>
        {showEvents(cust.events)}
      </div>
      <KeyDetails
        keyDetails={[
          {
            label: "Account",
            value: cust.accountId && (
              <Link to={singleAccount(cust.accountInfo.id)}>
                {cust.accountInfo.name}
              </Link>
            )
          },
          {
            label: "Owner",
            value: cust.userInfo && cust.userInfo.name
          }
        ]}
      />
    </Wrapper>
  );
}

export default CustomerCard;
