import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
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

  handleAddProduct = id => {
    const { addToCartRequest } = this.props

    addToCartRequest(id)
  }


  render() {
    const { products } = this.state;
    const { amount } = this.props;
    return (
      <ProductList>
        {products.map(products => (

          <li key={products.id}>

            <img src={products.image} alt={products.title} />
            <div>
              <strong>{products.title}</strong>
              <span>{products.priceFormated}</span>
            </div>
            <button type="button" onClick={() => this.handleAddProduct(products.id)}>
              <div>
                <MdAddShoppingCart size={16} color="#fff" />
                {amount[products.id]||0}
              </div>
              <span>ADICIONAR CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}
const mapStateToProps = state => ({
  amount: state.cart.reduce((amount,product)=>{
    amount[product.id]= product.amount
    return amount
  },{})
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(cartActions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Home)