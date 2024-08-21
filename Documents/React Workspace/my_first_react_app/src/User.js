import React, { Component } from 'react'

function User(props) // can be any name , not built in
 {
  return (
    <div>
        User component receving props

        <h1>User name:{props.name}</h1>
        <h1>User age:{props.age}</h1>

    </div>
  )
}

class User2 extends Component {
    constructor(props) {
        super(props); // Calling the parent class's constructor with props
    }

    render() {
        return (
            <div>
                <h1>User2 name: {this.props.name}</h1>
                <h1>User2 age: {this.props.age}</h1>
            </div>
        );
    }
}

export { User2 }; //class component exporting as named export


export default User