import React from "react";
import AddFoodForm from "./AddFoodForm";

class Inventory extends React.Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory is here are you there</h2>
        <AddFoodForm addDish={this.props.addDish} />
      </div>
    );
  }
}

export default Inventory;
