import React from "react";
import {
  Wrapper,
  Contact,
  KeyDetails,
  Info
} from "Components/Everyday/Layout/View/ProfileCard";
import { EventOutlined, CalendarToday } from "@material-ui/icons";

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

function AccountCard(props) {
  const { acct } = props;

  return (
    <Wrapper>
      <Contact
        name={acct.name}
        call={acct.baseContact.phone}
        email={acct.baseContact.email}
        website={acct.baseContact.website}
        indicator={
          acct.isActive
            ? { classes: "border-success text-success", name: "Active" }
            : { classes: "border-danger text-danger", name: "Inactive" }
        }
      />
      <div className="profile-card-section">
        <div className="profile-heading">
          <EventOutlined />
          Upcoming Events
        </div>
        {showEvents(acct.events)}
      </div>
      <KeyDetails
        keyDetails={[
          { label: "Industry", value: acct.industryInfo },
          {
            label: "Owner",
            value: acct.userInfo && acct.userInfo.name
          }
        ]}
      />
    </Wrapper>
  );
}

export default AccountCard;
