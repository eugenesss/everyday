import React, { Component } from 'react';
import { Col, Row } from "reactstrap";

import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";

const UserBlock = () => {
  return (
    <React.Fragment> 
      <RctCollapsibleCard>
        <Row className={"align-items-center pl-20 pb-20 border-bottom"}>
          <img src={require('Assets/avatars/user-37.jpg')} alt="user profile" className="rounded-circle bordered" width="150" height="150" />
          <div className={"ml-20"}>
              <h1>Lucile Beck</h1>
              <div>info@example.com</div>
          </div>
        </Row>
        <Row className={"pl-20 pr-20 pt-30 pb-20 border-bottom"}>
          <Col>
            <h2>About</h2>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat ac neque a bibendum. Phasellus tempus varius magna convallis volutpat. Sed justo elit, pellentesque id sem sit amet, ultrices ullamcorper risus. Vivamus dictum mi ante, non interdum libero commodo id. Nunc gravida congue sapien vitae rutrum.
            </div>
          </Col>
        </Row>
        <Row className={"pl-20 pr-20 pt-30 pb-10"}>
          <Col md={3}>Contact</Col>
          <Col md={9}>
            <div className="text-right"><b>98765432</b></div>
          </Col>
        </Row>
        <Row className={"pl-20 pr-20 pt-10 pb-10"}>
          <Col md={3}>LinkedIn</Col>
          <Col md={9}>
            <div className="text-right"><b>linkedin.com/qwerty</b></div>
          </Col>
        </Row>
        
      </RctCollapsibleCard>
    </React.Fragment>
  );
}

export default UserBlock;
