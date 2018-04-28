import numeral  from 'numeral'
import Vue  from 'vue'

Vue.filter("money", function(value) {   //全局方法 Vue.filter() 注册一个自定义过滤器,必须放在Vue实例化前面
    return numeral(value).format("0.00")
});