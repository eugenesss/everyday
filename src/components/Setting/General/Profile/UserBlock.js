import React from "react";
import { Col, Row } from "reactstrap";
import BgCard from "Components/Everyday/BgCard";

const UserBlock = ({ user, uploadFile }) => {
  return (
    <BgCard>
      <Row className={"align-items-center pl-20 pb-20 border-bottom"}>
        <div style={{ position: "relative" }}>
          <img
            src={require("Assets/avatars/user-1.jpg")}
            alt="user profile"
            className="rounded-circle bordered"
            width="150"
            height="150"
          />

          {/* <input  
                // className="rounded-circle bordered" 
                style={{
                  border: '1px solid black', position:'absolute',
                  top: 0, left: 0, width : 150, bottom: 0
                }}
                type="file"
                onChange={(e)=> uploadFile(e)}
              /> */}
        </div>

        <div className={"ml-20"}>
          <h1>{user ? user.name : ""}</h1>
          <div>{user ? user.email : ""}</div>
        </div>
      </Row>
      <Row className={"pl-20 pr-20 pt-30 pb-20 border-bottom"}>
        <Col>
          <h2>About</h2>
          <div>{user ? user.description : ""}</div>
        </Col>
      </Row>
      <Row className={"pl-20 pr-20 pt-30 pb-10"}>
        <Col md={3}>Contact</Col>
        <Col md={9}>
          <div className="text-right">
            <b>{user ? user.contact : ""}</b>
          </div>
        </Col>
      </Row>
    </BgCard>
  );
};

export default UserBlock;
