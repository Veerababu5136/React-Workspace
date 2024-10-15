
import React from 'react';

/*
  State is used to manage data that can change over time.
  
  In class components, the state is initialized in the constructor.
  The state is an object that contains the data the component needs.
  
  setState is a method used to update the state.
  
  Class components use `this.state` to reference the state and `this.setState` to update it.
  */
 
class Counter extends React.Component {
  

  constructor(props) {
    super(props);
    // Initialize state with a counter variable set to 0
    this.state = {
      counter: 0
    };
  }

  // Method to update the counter state
  updateCounter = () => {
    // Use setState to update the counter value
    // setState schedules an update to the component's state object
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }));
  };

  // Render method to display the UI
  render() {
    return (
      <div>
        <h1>Use State in Class Component</h1>
        {/* Access the current counter value from the state */}
        <p>Counter: {this.state.counter}</p>
        {/* Button to trigger the updateCounter method */}
        <input type="button" value="Update Counter" onClick={this.updateCounter} />
      </div>
    );
  }
}

export default Counter;
