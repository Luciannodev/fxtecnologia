import styled from 'styled-components';
import { Link } from 'react-router-dom'
export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #1D5656;
  align-items: center;
  border-radius: 13px;
  margin: 20px 0px;
  opacity: 0.9;
  padding: 5px;
`;
export const Cart = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: opacity 0.2s;

    &:hover{
        opacity:0.7;
        
    }
    div{
        text-align: right;
        margin: 5px;
    }
    strong{
        display: block;
        color: #fff;
    }
    span{
        font-size: 12px;
        color: #fff;
    }


`