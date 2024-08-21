import React, { Component } from 'react';

/*

components are 2 in react js

functions and classes

if we want to use any component we should export first 

exporting is 2 types named export, default export

in named export, we use same name to import

but we can use as keyword for alias

in named export we can export more

but default only one and any name can use to import 

*/

//using obj variable to style

const styles = {
  fontSize: '1.5vh',
  margin: '2vh',
  padding: '1vh',
  color: 'blue',  // You can add more styles as needed
};


function firstFunc() {
    return (
        <div>
            <h1 style={{color:"blue",backgroundColor:"yellow"}}>First Function exported using default</h1> 
            
            {/* applying inline style using jsx attribute and in that {} jsx expression it takes args as json/object format*/}
        </div>
    );
}

function firstFunc2() {
    return (
        <div>
            <h1 style={styles}>First Function exported using named</h1>
        </div>
    );
}



class Welcome extends Component
 {
    render() 
    {
      return (
        <div>
          <h1>Hello</h1>
          <p>Welcome to React Class Components.</p>
        </div>
      );
    }
  }
  


// Correct Export Statements 

export default firstFunc;  // Default export for `firstFunc`

export { firstFunc2 };    // Named export for `firstFunc2`


export { Welcome };


// export { firstFunc2 as firstFunc }; // Named Export


