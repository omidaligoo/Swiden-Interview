import './App.css';
import React, { Component } from 'react';
import AuthComponent from './components/authentication/AuthComponent';
import ProductListComponent from './components/product/ProductListComponent';

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {



    /**
     * 
     * the base templeate of store project
     */
    return (
      <div className="App">
        <header>
          <h1 className="logo"><span>Sweden</span>project
              <div className="sub-info">Interview Shopping</div>
          </h1>
          <div className="navigation"><a href="#">Just In</a><a href="#">Men</a><a href="#">Women</a><a href="#">Brands</a><a className="active" href="#">Sales</a></div>
          <div className="more">
            <AuthComponent />
          </div>
        </header>
        <div className="container">
          <div className="sub-header">
            <h2 className="title">PRODUCTS</h2>
            <div className="close-btn"><i className="fa fa-close"></i></div>
          </div>
          <ProductListComponent />
        </div>
      </div>
    );



  }
}

export default App;
