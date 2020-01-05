import { Link } from 'react-router-dom';
import React from 'react';
import logo from '../../assets/logo.png';
import { connect } from 'react-redux'
import { Container, Cart } from './styles';
import { MdShoppingBasket } from 'react-icons/md'
function Header({ cartSize }) {
    return (
        <Container>
            <Link to="/">
                <img src={logo} width="165px" alt="fx" />
            </Link>
            <Cart to="/cart">
                <div>
                    <strong>Meu carrinho</strong>
                    <span>{cartSize} itens</span>
                </div>
                <MdShoppingBasket size={36} color="#FFF" />
            </Cart>
        </Container>
    );
}
export default connect(state => ({
    cartSize: state.cart.length,
}))(Header);
