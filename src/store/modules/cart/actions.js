export function addToCartRequest(id){
    return{
        type: '@cart/ADD_REQUEST',
        id,
    };
}
export function addToCartSucess(products){
    return{
        type: '@cart/ADD_SUCESS',
        products,
    };
}

export function removeFromCart(id){
    return{
        type: '@cart/REMOVE',
        id,
    }
} 

export function updateAmount(id,amount){
    return{
        type:'@cart/UPDATE_AMOUNT',
        id,
        amount
    }
}