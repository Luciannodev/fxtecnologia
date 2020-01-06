import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md'
import { Container, Total, ProductTable } from './styles'
import * as cartActions from '../../store/modules/cart/actions'
function Cart({ cart, removeFromCart, updateAmount }) {

  function increament(product) {
    updateAmount(product.id, product.amount + 1)
  }
  function decrement(product) {
    updateAmount(product.id, product.amount - 1)
  }



  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>Produto</th>
            <th>Qtd</th>
            <th>Subtotal</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map(product => (
            <tr key={product.id}>
              <td>
                <img src={product.image}
                  alt={product.title}
                />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormated}</span>
              </td>
              <td>
                <div>
                  <button type="button" onClick={() => decrement(product)}>
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button" onClick={() => increament(product)}>
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>R$126</strong>
              </td>
              <td>
                <MdDelete size={20} color="#7159c1" onClick={() => removeFromCart(product.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Finalizar Pedido</button>
        <Total>
          <span>Total</span>
          <strong>R$1920,27</strong>
        </Total>
      </footer>

    </Container>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(cartActions, dispatch);


const mapStateToProps = state => ({
  cart: state.cart
});
export default connect(
  mapStateToProps, mapDispatchToProps
)(Cart)