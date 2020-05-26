import {
  ADD_COUNTER,
  ADD_TO_CART
} from "./mutations-types";

export default {
  [ADD_COUNTER](state,payload){
    payload.count++       //在这里面的操作才可以跟踪
  },
  [ADD_TO_CART](state,payload){
    //添加新的商品
    payload.checked = true
    state.cartList.push(payload)
  }
}
