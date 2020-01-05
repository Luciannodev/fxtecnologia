export function addToCart(products){
    return{
        type: 'add_to_cart',
        products,
    };
}

export function removeFromCart(id){
    return{
        type: 'remove_from_cart',
        id,
    }
}