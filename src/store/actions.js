import {
  ADD_COUNTER,
  ADD_TO_CART
} from "./mutations-types";

export default {   //异步操作和有判断逻辑的代码一般放actions里面
                   //context 相当于store
  addCart(context,payload){
    return new Promise((resolve,reject)=>{
      let product = context.state.cartList.find(item => item.iid === payload.iid)
      //将符合条件的item返回
      if(product){
        context.commit(ADD_COUNTER,product)
        resolve("当前商品数量+1");
      }else{
        payload.count = 1
        context.commit(ADD_TO_CART,payload)
        // state.cartList.push(payload)
        resolve("添加成功");
      }
    })
  }
}
