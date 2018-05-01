<template>

  <v-container>



    <v-card>
      <v-layout row wrap>
        <v-flex sm5>
          <v-layout row wrap="">
            <v-flex sm3 class="">
              <v-subheader>最高价</v-subheader>
            </v-flex>
            <v-flex sm3>
              <v-subheader>{{marketTop.title}}</v-subheader>
            </v-flex>
            <v-flex sm4 class="headline  red--text">{{marketTop.price[0][4]}}</v-flex>
  
            <v-flex sm3>
              <v-subheader>最低价</v-subheader>
            </v-flex>
            <v-flex sm3>
              <v-subheader>{{marketLow.title}}</v-subheader>
            </v-flex>
            <v-flex sm4 class="headline  red--text">{{marketLow.price[0][4]}}</v-flex>
          </v-layout>
        </v-flex>

        <v-flex sm3 v-if="marketTop && marketLow">
          <br>
          <v-layout>
            <v-flex sm4>
              <v-subheader>差价</v-subheader>
            </v-flex>
            <v-flex class="headline blue--text">{{marketTop.price[0][4] - marketLow.price[0][4] | money}}</v-flex>
          </v-layout>
        </v-flex>

        <v-flex sm2 v-if="autoModel == '0'">
          <v-layout row wrap="">
             <v-flex sm12>
             <v-btn color="success">最高价卖出</v-btn>
            </v-flex>
            <v-flex sm12>
              <v-btn color="info"> 最低价买入</v-btn>
            </v-flex>      
                </v-layout>
            
        </v-flex>

        <v-flex sm2>

          <v-layout row wrap="">




                <v-radio-group v-model="autoModel">
             <v-flex sm12>
                 <v-radio
        label="手动模式"
        value="0"
      ></v-radio>

            </v-flex>
            <v-flex sm12>
              <v-radio
        label="自动模式"
        value="1"
      ></v-radio>
            </v-flex>      
               



    </v-radio-group>
   </v-layout>
        </v-flex>

      </v-layout>

    </v-card>
    <br>
    <v-layout>
      <v-flex>
        <v-card>
          <v-card-title>高价Top3</v-card-title>
          <v-divider></v-divider>
          <v-card-text>

            <v-radio-group v-model="marketTop">
      <v-radio
        v-for="item in marketsTop3"
        :key="item.id"
        :mandatory="false"
        :label="`${item.title} --- ${item.price[0][4]}`"
        :value="item"
      ></v-radio>
    </v-radio-group>


            <!-- <v-layout row wrap v-for="item in marketsTop3">
              <v-flex sm6>
                <v-subheader>{{item.title}}</v-subheader>
              </v-flex>
              <v-flex sm6>
                <v-subheader>{{item.price[0][4] | money}}</v-subheader>
              </v-flex>
            </v-layout> -->

          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex>
        <v-card>
          <v-card-title>低价Top3</v-card-title>
          <v-divider></v-divider>

          <v-card-text>


            <v-radio-group v-model="marketLow">
      <v-radio
        v-for="item in marketsLow3"
        :key="item.id"
        :mandatory="false"
        :label="`${item.title} ${item.price[0][4]}`"
        :value="item"
      ></v-radio>
    </v-radio-group>


            <!-- <v-layout row wrap v-for="item in marketsLow3">
              <v-flex sm6>
                <v-subheader>{{item.title}}</v-subheader>
              </v-flex>
              <v-flex sm6>
                <v-subheader>{{item.price[0][4] | money}}</v-subheader>
              </v-flex>

            </v-layout> -->
          </v-card-text>

        </v-card>
      </v-flex>
    </v-layout>
    <br>
    <!-- <v-card class="text-xs-center">
       <span class="subheading blue--text"> 当前汇率 1USD  = 6.29 CNY</span>   
    </v-card>
 
    <br>

    <v-card>
      <v-card-title><span class="headline">方案1</span><span>OkEx 人民币C2C USDT价格{{usdtExchange}}</span></v-card-title>
       <v-card-text>
         <v-layout>
           <v-flex xs8>
           充值花费 <span class="blue--text">{{marketLow.price[1][4]*(usdtExchange - 6.29) | money}}</span> CNY   充值费率{{(usdtExchange-6.29)/6.29 * 100 |money}}%
            <br>
           提取花费 <span class="blue--text"> 0 </span> CNY
           </v-flex>
           <v-flex xs2>
             利润：<span class="headline red--text">{{marketTop.price[0][4] - (marketLow.price[1][4]*usdtExchange) | money}}</span>
           </v-flex>
         </v-layout>

        
       </v-card-text>

    </v-card>
    <br>
    <v-card>
      <v-card-title><span class="headline">方案2</span><span>Epay 美元购买 </span> <span class="red--text">不能使用国内银行卡</span> </v-card-title>
       <v-card-text>
                  <v-layout>
           <v-flex xs8>
           充值花费 <span class="blue--text">{{ (5 * 6.29) | money}}</span> 充值费率{{(5/marketLow.price[1][4]) * 100 |money}} %
           <br>
           提取花费 <span class="blue--text">{{(marketLow.price[1][4] *0.01)+(20 * 6.29) | money}}</span> 提取花费 费率{{((marketLow.price[1][4] *0.01) + 20)/marketLow.price[1][4] * 100 |money}} %
        </v-flex>
           <v-flex xs2>
        利润：<span class="headline red--text">{{(marketTop.price[0][4] - marketLow.price[1][4]*usdtExchange)-((marketLow.price[1][4] *0.01)+(25 * 6.29)) | money}}</span>
                </v-flex>
         </v-layout>
       </v-card-text>

    </v-card> -->
  </v-container>

</template>

<script>
import {mapGetters} from 'vuex'
import schedule from 'node-schedule'
export default {
  data (){
    return {
        marketTop:{},
        marketLow:{},
        autoModel:'0'
      // marketTop:{price:57386.84895,name:"Bithumb"},
      // marketLow:{price:54702.64113,name:"GDAX・USD"},
      // marketsTop3:[{price:57386.84895,name:'Bithumb'},{price:57379.6,name:'BitAsiaEx'},{price:57316.55783,name:'COINONE'}],
      // marketsLow3:[{price:54702.64113,name:'GDAX・USD'},{price:55083.82542,name:'CoinEx・BCH'},{price:55270.7847,name:'coinnice.future'}],
    }
  },
  components: {},
  computed:{
    ...mapGetters({marketsTop3:'GetMarketsTop3',marketsLow3:'GetMarketsLow3',usdtExchange:'GetUsdtExchange'}),
    priceDiff:()=>{
      return this.marketTop - this.marketLow
    },
  },
  methods: {
        getData(){
           var that = this
          schedule.scheduleJob('/10 * * * * *', function(){  
              that.$store.dispatch('getBTCPrice')
            });
          // schedule.scheduleJob('5 * * * * *', function(){  
          //      that.$store.dispatch('getOkexUSDT')
          //   });
           
        }
  },
    created () {
      this.$store.dispatch('getBTCPrice')
      // this.$store.dispatch('getOkexUSDT')
     
  },
  mounted(){
    this.getData()
  },
  watch: {
      marketsTop3:function(val){
        this.marketTop = val[0]
      },
      marketsLow3:function(val){
        this.marketLow = val[0]
      }
  }
};
</script>

<style scoped>
.centered {
  display: flex;
  justify-content: center;
  align-items: center;
}

.chajia-card{
  height: 64px;
}
</style>
