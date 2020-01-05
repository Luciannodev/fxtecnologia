import produce from 'immer'
export default function cart(state = [], action) {
    switch (action.type) {
        case 'add_to_cart':
            return produce(state, draft => {
                const productIndex = draft.findIndex(p=> p.id ===action.products.id)
                
                if(productIndex>= 0){
                    draft[productIndex].amount +=1;
                    console.log(productIndex)
                }else{
                    draft.push({
                        ...action.products,
                        amount: 1,
                    });
                }
            });
        case 'remove_from_cart':
            return produce(state,draft=>{
                const productIndex = draft.findIndex(p=> p.id === action.id)
                if(productIndex>=0){
                    draft.splice(productIndex,1)
                }
            })
          default:
            return state;
    }

}