import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";

class App extends React.Component {
  state = {
    dishes: {},
    order: {},
  };

  addDish = dish => {
    // Steps to update a state
    // 1. take copy of existing state
    const dishes = {...this.state.dishes };

    //2.add new dish to dishes variable
    dishes[`dish${Date.now()}`] = dish;
    // set the new dishes object to state
    this.setState({
      dishes
    });
    // console.log("here is your dish");
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tag="North" />
        </div>
        <Inventory addDish={this.addDish} />
        <Order />
      </div>
    );
  }
}

export default App;
