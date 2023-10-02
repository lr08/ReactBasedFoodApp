import React from "react";
import AddFoodForm from "./AddFoodForm";
import EditDishForm from "./EditDishForm";

class Inventory extends React.Component {

  render() {
    return (
      <div className="inventory">
        <h2>Inventory is here are you there</h2>
        {Object.keys(this.props.dishes).map(key => (
          <EditDishForm
            key={key}
            index={key}
            dish={this.props.dishes[key]}
            updateDish={this.props.updateDish}
          />
        ))}
        <AddFoodForm addDish={this.props.addDish} />
        <button onClick={this.props.loadDishes}>Sample Dishes</button>
      </div>
    );
  }
}

export default Inventory;
