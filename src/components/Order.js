import React from "react";
import { formatPrice } from "../helpers";

class Order extends React.Component {
  // Separate render function to reduce complexity
  renderOrder = key => {
    const dish = this.props.dishes[key]; //each dish
    const count = this.props.order[key]; //dish count at a time
    const isAvailable = dish && dish.status === "available";
    // Make sure the fish is loaded before we continue!
    if (!dish) return null;
    
    if (!isAvailable) {
      return <li key={key}>Sorry {dish ? dish.name : "dish"} not available</li>;
    }
    return (
      <li key={key}>
        {count} {dish.name}
        {formatPrice(count * dish.price)}
      </li>
    );
  };

  render() {
    const orderIds = Object.keys(this.props.order); // get individula order
    const total = orderIds.reduce((prevTotal, key) => {
      // getting a sort of tally from reduce function which sum up the order in preTotal
      const dish = this.props.dishes[key]; //each dish
      const count = this.props.order[key]; //dish count at a time
      const isAvailable = dish && dish.status === "available";
      if (isAvailable) {
        return prevTotal + count * dish.price;
      }
      return prevTotal;
    }, 0); //here o is the starting index

    return (
      <div className="order">
        <ul className="order">{orderIds.map(this.renderOrder)}</ul>
        <div className="total">
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
