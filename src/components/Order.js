import React from "react";
import { formatPrice } from "../helpers";

class Order extends React.Component {
  
  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const dish = this.props.dishes[key];
      const count = this.props.order[key];
      const isAvailable = dish && dish.status === "available";
      if (isAvailable) {
        return prevTotal + count * dish.price;
      }
      return prevTotal;
    }, 0);

    return (
        <div className="order">
           {/* <ul className="order">{orderIds.map(this.renderOrder)}</ul> */}
           {orderIds}
          <div className="total">
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
        </div>
    );
  }
}

export default Order;