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
  componentDidMount(){
    // firebase ref 
    this.ref = base.syncState(`${this.props.match.params.storeId}/dishes`,{
      context: this,
      state:'dishes'
       
    });
  }

  componentWillUnmount(){
    base.removeBinding(this.ref);
  }

  componentDidUpdate(){
    // to store order
    localStorage.setItem(this.props.match.params.storeId,JSON.stringify(this.state.order));
  }

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
     console.log(dishes);
  };

  addToOrder = key=>{

    const order = {...this.state.order};

    order[key]= order[key] +1||1;

    this.setState({
      order
    })


  }
    loadSampleDishes = () =>{ 
      this.setState({
        dishes:sampledishes
      })
    }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tag="& Best" />
          <ul className="dishes">
            {Object.keys(this.state.dishes).map(key => (
              <Dish
                key={key}
                index={key}
                details={this.state.dishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Inventory addDish={this.addDish} loadDishes={this.loadSampleDishes} />
        <Order dishes={this.state.dishes} order={this.state.order}/>
      </div>
    );
  }
}

export default App;
