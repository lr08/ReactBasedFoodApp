import React from "react";

class EditDishForm extends React.Component {
  handleChange = event => {
    console.log(event.currentTarget.value);
    // update that dish
    // 1. Take a copy of the curernt dish
    const updatedDish = {
      ...this.props.dish,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateDish(this.props.index, updatedDish);
  };
  render() {
    return (
      <div className="dish-edit">
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.props.dish.name}
        />
        <input
          type="text"
          name="price"
          onChange={this.handleChange}
          value={this.props.dish.price}
        />
        <select
          type="text"
          name="status"
          onChange={this.handleChange}
          value={this.props.dish.status}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          name="desc"
          onChange={this.handleChange}
          value={this.props.dish.desc}
        />
        <input
          type="text"
          name="image"
          onChange={this.handleChange}
          value={this.props.dish.image}
        />
      </div>
    );
  }
}

export default EditDishForm;
