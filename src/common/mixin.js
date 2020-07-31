import BackTop from "components/content/backtop/BackTop";
import Vue from 'vue'
export const backTop = {
    data(){
      return {
        timer:null,
        currentY:null
      }
    },
    components:{
      BackTop
    },
    methods:{
      backClick(){
        this.currentY = 0
        this.$refs.scroll.backTop()
      }
    }
}