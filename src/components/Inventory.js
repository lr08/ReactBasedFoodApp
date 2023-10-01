import React from "react";
import AddFoodForm from "./AddFoodForm";

class Inventory extends React.Component {

  render() {
    return (
      <div className="inventory">
        <h2>Inventory is here are you there</h2>
        <AddFoodForm loadDishes={this.props.loadDishes} addDish={this.props.addDish} />
        <button onClick={this.props.loadDishes}>Sample Dishes</button>
      </div>
    );
  }
}

export default Inventory;
