export default {
  addCount(state,payload){
    payload.count ++
    // console.log(state.cartList);
  },

  addToCart(state,payload){
    state.cartList.push(payload)
    // console.log(state.cartList);
  },
}