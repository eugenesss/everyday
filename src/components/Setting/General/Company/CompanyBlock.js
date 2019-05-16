import React from 'react';
import { Col, Row } from "reactstrap";

import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";

const CompanyBlock = () => {
  return (
    <React.Fragment> 
      <RctCollapsibleCard>
        <Row className={"align-items-center pl-20 pb-20 border-bottom"}>
          <img src={require('Assets/img/logo-1.jpg')} alt="user profile" className="rounded-circle bordered" width="150" height="150" />
          <div className={"ml-20"}>
              <h1>Fish LLC</h1>
              <div>flying@fish.com</div>
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
          <Col md={3}>Website</Col>
          <Col md={9}>
            <div className="text-right"><b>www.fishllc.com</b></div>
          </Col>
        </Row>
      </RctCollapsibleCard>
    </React.Fragment>
  );
}

export default CompanyBlock;
