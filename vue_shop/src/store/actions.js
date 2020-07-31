export default {
  addCart(context,payload){
    return new Promise((resolve,reject)=>{
      let product =  context.state.cartList.find(item=>item.iid === payload.iid)
      //返回符合条件的item
      if(product){
        context.commit('addCount',product)    //可以改变product，响应到cartList中
        resolve('当前商品数量+1')
      }else{
        payload.count = 1
        payload.checked = true     //用于判断该商品是否选择，默认为选中
        context.commit('addToCart',payload)
        resolve('添加成功')
      }
    })
  }
}