import React, { Fragment } from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
    myInput = React.createRef();
  // // 1st way
  //   constructor() {
  //     super();
  //     //Binding goToStore to StorePicker
  //     this.goToStore = this.goToStore.bind(this);
  //   }
  //   myInput = React.createRef();
  //   goToStore(event) {
  //     event.preventDefault();
  //     console.log("Going to Store");
  //   }

  //2nd way
  goToStore = event => {
    event.preventDefault();
    const storeName = this.myInput.value;
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      // Fragment is known as React.Fragment
      <Fragment>
        <form className="hey" onSubmit={this.goToStore}>
          <h2>Store Picker</h2>

          <input
            type="text"
            ref={this.myInput}
            required
            placeholder="Name"
            defaultValue={getFunName()}
          />
          <button type="submit">Visit Store</button>
        </form>
        <p>Food is getting cooked</p>
      </Fragment>
    );
  }
}

export default StorePicker;
