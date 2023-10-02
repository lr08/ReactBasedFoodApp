import React from "react";

class AddFoodForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createDish = (event) => {
    event.preventDefault();
    const dish = {
      name: this.nameRef.current.value,
      price: this.priceRef.current.value,
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value,
    };
    this.props.addDish(dish);
    event.currentTarget.reset();
  };

  render() {
    return (
      <form className="Dish" onSubmit={this.createDish}>
        <input
          name="name"
          ref={this.nameRef}
          type="text"
          required
          placeholder="Name"
        />
        <input type="text" ref={this.priceRef} required placeholder="Price" />
        <select type="text" ref={this.statusRef} required placeholder="Status">
          <option value="Available">Available</option>
          <option value="NotAvailable">Sold Out</option>
        </select>
        <textarea type="text" ref={this.descRef} required placeholder="Desc" />
        <input type="text" ref={this.imageRef} required placeholder="Image" />
        <button type="submit">Add Dish</button>
      </form>
    );
  }
}

export default AddFoodForm;
