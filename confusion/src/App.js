import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

// import { DISHES } from './shared/dishes';
// import Menu from './components/MenuComponent'
// import { Navbar, NavbarBrand } from 'reactstrap';
// class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       dishes: DISHES

//     }
//   }

//   render() {
//     return (
//       <div className="App">
//         <Navbar dark color="primary">
//           <div className="container">
//             <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
//           </div>
//         </Navbar>
//         <Menu dishes={this.state.dishes} />
//       </div>
//     );
//   }


// }

import Main from './components/MainComponent';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;