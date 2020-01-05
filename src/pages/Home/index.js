import React, { Component } from 'react';
import { connect } from 'react-redux'
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';
import api from '../../services/api';
import { Price } from '../../util/format.js'
import * as cartActions from '../../store/modules/cart/actions'

class Home extends Component {
  state = {
    products: [],
  };


  async componentDidMount() {
    const response = await api.get('products');


    const data = response.data.map(products => ({
      ...products,
      priceFormated: Price(products.price),
    }));

    this.setState({ products: data });
  }

  handleAddProduct = products =>{
    const {dispatch} = this.props

    dispatch(cartActions.addToCart(products))
  }


  render() {
    const { products } = this.state;

    return (
      <ProductList>
        {products.map(products => (
        
          <li key ={products.id}>
            
            <img src={products.image} alt={products.title} />
            <div>
            <strong>{products.title}</strong>
            <span>{products.priceFormated}</span>
            </div>
            <button type="button" onClick={() => this.handleAddProduct(products)}>
              <div>
                <MdAddShoppingCart size={16} color="#fff" /> 3
        </div>
              <span>ADICIONAR CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

export default connect()(Home)