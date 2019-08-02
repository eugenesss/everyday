import React from "react";
import { Col, Row } from "reactstrap";

const UserBlock = ({ user, uploadFile }) => {
  return (
    <div className="rct-block">
      <div className="rct-block-content">
        <Row
          className={"align-items-center pl-20 pb-20 border-bottom"}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div style={{ position: "relative" }}>
            <img
              src={require("Assets/avatars/user-37.jpg")}
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
            <h1>{user ? user.name : "John"}</h1>
            <div>{user ? user.email : "Johnny1990@gmail.com"}</div>
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
      </div>
    </div>
  );
};

export default UserBlock;
