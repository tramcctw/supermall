//防抖动 防止刷新次数频率过多
export function debounce(func,delay){
  let timer = null;
  return function (...args) {
    //此时this指向为空，不再为window
    if(timer) clearTimeout(timer);
    timer = setTimeout(()=>{
      func.apply(this,args);
    },delay)
  }
}
