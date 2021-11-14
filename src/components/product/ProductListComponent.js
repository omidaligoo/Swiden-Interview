import './ProductListComponent.css';
import React, { Component } from 'react';
class ProductListComponent extends Component {


  /**
   * 
   * @param {*} props 
   * Initialize component public state for use on view side
   */
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    }
  }



  /**
   * component first runed method.if this fetch not complete,view show a loading 
   */
  componentDidMount() {

    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => this.setState({ items: data, isLoaded: true }));
  }

  render() {
    var { isLoaded, items } = this.state;

    /**
     * control with state.isLoaded
     * if fetch not complete and doing to fetch all data from backend side
     */
    if (!isLoaded) {
      return (
        <div className="App">
          <h1 className="logo"><span>IS</span>LOADING ...
                   <div className="sub-info">Sweden Shop Products</div>
          </h1>
        </div>
      )

    /**
     * state.items
     * when receive product list from back end.show to a card list
     */
    } else {
      return (
        <div className="thumb-wrapper">
          {items.map(item => (
            <div key={item.id} className="thumb-unit" >
              <div className="heading"><span>${item.price}</span><span><i className="fa fa-heart-o"></i></span></div>
              <div className="box" style={{ backgroundImage: `url(${item.image})` }}></div>
              <div className="info">
                <p>{item.title}</p><span class="icon"><i class="fa fa-shopping-cart"></i></span>
              </div>
            </div>
          ))}
        </div>
      )
    }
  }
}
export default ProductListComponent;