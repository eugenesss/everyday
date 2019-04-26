import React, { Component } from "react";
import { Card, CardTitle, CardText } from "reactstrap";

function getStepContent(step, desc) {
  switch (step) {
    case 0:
      return (
        <div>
          <p>
            <strong>{desc}</strong>
          </p>
          <p>
            <strong>Qualify the opportunity and confirm budget</strong>
          </p>
          <ul>
            <li>What's their business?</li>
            <li>What pronlems are they trying to solve?</li>
            <li>How does solving these problems help them?</li>
            <li>Is the timing good for them?</li>
            <li>What's their budget?</li>
            <li>What other solutions are they considering?</li>
          </ul>
        </div>
      );
    case 1:
      return (
        <div>
          <p>
            <strong>{desc}</strong>
          </p>
          <p>
            <strong>Understand the business need and decision criteria.</strong>
          </p>
          <ul>
            <li>Why is our solution a good fit?</li>
            <li>How is our solution better than our competitors?</li>
            <li>What resources are available to implement the solution?</li>
          </ul>
        </div>
      );
    case 2:
      return (
        <div>
          <p>
            <strong>{desc}</strong>
          </p>
          <p>
            <strong>
              Present the solution and understand the buying process
            </strong>
          </p>
          <ul>
            <li>Where are the in the buying cycle?</li>
            <li>What's the process to generate purchase orders?</li>
            <li>
              Who are the key decision makers? Have you added them to the
              opportunity?
            </li>
            <li>
              How can you communicate the value of our solutions to those
              decision makers?
            </li>
            <li>What's the status of quantifying ROI with them?</li>
          </ul>
        </div>
      );
    case 3:
      return (
        <div>
          <p>
            <strong>{desc}</strong>
          </p>
          <p>
            <strong>Negotiate value and resolve objectives</strong>
          </p>
          <ul>
            <li>Have you confirmed all key decision makers are on board?</li>
            <li>
              Have you focus enough on selling the value to negotiate for the
              best price?
            </li>
          </ul>
        </div>
      );
    case 4:
      return (
        <div>
          <p>
            <strong>{desc}</strong>
          </p>
        </div>
      );
    case 5:
      return (
        <div>
          <p>
            <strong>{desc}</strong>
          </p>
        </div>
      );
    case 6:
      return (
        <div>
          <p>
            <strong>{desc}</strong>
          </p>
        </div>
      );
    default:
      return "Unknown step";
  }
}
class DealStageContent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { step, desc } = this.props;
    return (
      <Card body outline color="info">
        <CardTitle className="pb-10">Key Notes</CardTitle>
        <div className="p-20">{getStepContent(step, desc)}</div>
      </Card>
    );
  }
}

export default DealStageContent;
