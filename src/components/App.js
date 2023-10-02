import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampledishes from "../sample-dishes";
import Dish from "./Dish";
import base from "../base";

class App extends React.Component {
  state = {
    dishes: {},
    order: {},
  };

  //For persisting data for inventory in firebase
  componentDidMount() {
    const { params } = this.props.match;
    // firebase ref
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }

    this.ref = base.syncState(`${params.storeId}/dishes`, {
      context: this,
      state: "dishes",
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  componentDidUpdate() {
    // to store order
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    );
  }

  addDish = (dish) => {
    // Steps to update a state
    // 1. take copy of existing state
    const dishes = { ...this.state.dishes };

    //2.add new dish to dishes variable
    dishes[`dish${Date.now()}`] = dish;
    // set the new dishes object to state
    this.setState({
      dishes,
    });
    console.log(dishes);
  };

  updateDish = (key, updatedDish) => {
    // 1. Take a copy of the current state
    const dishes = { ...this.state.dishes };
    // 2. Update that state
    dishes[key] = updatedDish;
    // 3. Set that to state
    this.setState({ dishes });
  };

  addToOrder = (key) => {
    const order = { ...this.state.order };

    order[key] = order[key] + 1 || 1;

    this.setState({
      order,
    });
  };

  loadSampleDishes = () => {
    this.setState({
      dishes: sampledishes,
    });
  };

  deleteDish = key => {
    // 1. take a copy of state
    const dishes = { ...this.state.dishes };
    // 2. update the state
    dishes[key] = null;
    // 3.  update state
    this.setState({ dishes });
  };

  removeFromOrder = key => {
    // 1. take a copy of state
    const order = { ...this.state.order };
    // 2. remove that itemf from order
    delete order[key];
    // 3. Call setState to update our state object
    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tag="& Best" />
          <ul className="dishes">
            {Object.keys(this.state.dishes).map((key) => (
              <Dish
                key={key}
                index={key}
                details={this.state.dishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Inventory
          addDish={this.addDish}
          loadDishes={this.loadSampleDishes}
          updateDish={this.updateDish}
          dishes={this.state.dishes}
          deleteDish={this.deleteDish}
        />
        <Order
          dishes={this.state.dishes}
          order={this.state.order}
          removeFromOrder={this.removeFromOrder}
        />
      </div>
    );
  }
}

export default App;
