import React from "react";
const products = [
  {
    id: 1,
    qty: 1,
    name: "iPhone 5 32GB White & Silver (GSM) Unlocked",
    price: 749,
    total: 749
  },
  {
    id: 2,
    qty: 1,
    name: "iPhone 5 32GB White & Silver (GSM) Unlocked",
    price: 749,
    total: 749
  },
  {
    id: 3,
    qty: 1,
    name: "iPhone 5 32GB White & Silver (GSM) Unlocked",
    price: 749,
    total: 749
  },
  {
    id: 4,
    qty: 1,
    name: "iPhone 5 32GB White & Silver (GSM) Unlocked",
    price: 749,
    total: 749
  }
];
const ViewTemplate = ({}) => {
  return (
    <div className="p-50">
      <div className="d-flex justify-content-between mb-50">
        <div className="sender-address">
          <div className="invoice-logo mb-30">
            <img
              src={require("Assets/img/appLogo_orig_dark.png")}
              alt="session-logo"
              className="img-fluid"
              width="140"
            />
          </div>
          <div className="address">
            <span>1 Infinite Loop</span>
            <span>95014 Cuperino, CA</span>
            <span>United States</span>
          </div>
          <div className="address">
            <span>Telephone: 800-692-7753</span>
            <span>Fax: 800-692-7753</span>
          </div>
        </div>
        <div className="invoice-address text-right">
          <span>QUOT-9048392</span>
          <span>Created Date: Jun 15, 2016</span>
          <span>Expiry Date: Jun 26, 2016</span>
        </div>
      </div>
      <div className="d-flex justify-content-between mb-30 add-full-card">
        <div className="add-card">
          <h4 className="mb-15">Bill To</h4>
          <span className="name">Jack Perez</span>
          <span>2nd Floor</span>
          <span>St John Street, Aberdeenshire 2541</span>
          <span>United Kingdom</span>
          <span>Phone: 031-432-678</span>
          <span>Email: youemail@gmail.com</span>
        </div>
        <div className="add-card">
          <h4 className="mb-15">Ship To</h4>
          <span className="name">Jack Perez</span>
          <span>2nd Floor</span>
          <span>St John Street, Aberdeenshire 2541</span>
          <span>United Kingdom</span>
          <span>Phone: 031-432-678</span>
          <span>Email: youemail@gmail.com</span>
        </div>
      </div>

      <div className="table-responsive mb-40">
        <table className="table table-borderless">
          <thead>
            <tr>
              <th>#</th>
              <th>Description</th>
              <th>Qty</th>
              <th>Unit Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, key) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{product.name}</td>
                <td>{product.qty}</td>
                <td>${product.price.toFixed(2)}</td>
                <td>${product.total.toFixed(2)}</td>
              </tr>
            ))}
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td className="fw-bold">Subtotal</td>
              <td>$1607.00</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td className="fw-bold">Shipping</td>
              <td>$0.00</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td className="fw-bold">Total</td>
              <td>$1607.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="note-wrapper row">
        <div className="invoice-note col-sm-12 col-md-8">
          <h3>Terms & Conditions</h3>
          <p className="fs-12">
            Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,
            weebly ning heekya handango imeem plugg dopplr jibjab, movity jajah
            plickers sifteo edmodo ifttt zimbra.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewTemplate;
