

function productsGetter(state = {}, action) {

    if(action.type === 'PUT_PRODUCTS') {
        
            return {...state, 
                    products:action.payload.data};
    }
      return state;
}

const actionPutProducts = (payload) => {

    return({type: 'PUT_PRODUCTS', payload})};


const actionGetProducts = () => { 
    return(
    ({type: 'GET_PRODUCTS'}))
}
    


export {productsGetter, actionGetProducts, actionPutProducts};