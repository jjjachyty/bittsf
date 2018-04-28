<template>
    <v-app>
       
        <v-layout row wrap>
            <v-flex xs9 lg10 mb10 offset-xs1>
                <v-expansion-panel popout>
                    <v-expansion-panel-content>
                        <div slot="header">BitAsiaEx</div>
                        <v-card>
                            <v-card-text>
                                <v-layout row wrap>
                                    <v-flex offset-xs1 xs8>
                                        <v-text-field :v-model="marketsParams.BitAsiaEx.cookie" prefix="Cookie"></v-text-field>
                                    </v-flex>
                                    <v-flex offset-xs1 xs8>
                                        <v-text-field :value="marketsParams.BitAsiaEx.czFree" prefix="充值费率"></v-text-field>
                                    </v-flex>
                                    <v-flex offset-xs1 xs8>
                                        <v-text-field :value="marketsParams.BitAsiaEx.tqFree" prefix="提取费率"></v-text-field>
                                    </v-flex>
                                    <v-flex offset-xs1 xs8>
                                        <v-text-field :value="marketsParams.BitAsiaEx.buyFree" prefix="买入费率"></v-text-field>
                                    </v-flex>
                                    <v-flex offset-xs1 xs8>
                                        <v-text-field :value="marketsParams.BitAsiaEx.sellFree" prefix="卖出费率"></v-text-field>
                                    </v-flex>
                                </v-layout>
                            </v-card-text>
                        </v-card>
                    </v-expansion-panel-content>

                    <v-expansion-panel-content>
                        <div slot="header">Weex</div>
                        <v-card>
                            <v-card-text>
                                <v-layout row wrap>
                                    <v-flex offset-xs1 xs8>
                                        <v-text-field :v-model="marketsParams.Weex.authorization" prefix="accesskey"></v-text-field>
                                    </v-flex>
                                    <v-flex offset-xs1 xs8>
                                        <v-text-field :value="marketsParams.Weex.czFree" prefix="充值费率"></v-text-field>
                                    </v-flex>
                                    <v-flex offset-xs1 xs8>
                                        <v-text-field :value="marketsParams.Weex.tqFree" prefix="提取费率"></v-text-field>
                                    </v-flex>
                                    <v-flex offset-xs1 xs8>
                                        <v-text-field :value="marketsParams.Weex.buyFree" prefix="买入费率"></v-text-field>
                                    </v-flex>
                                    <v-flex offset-xs1 xs8>
                                        <v-text-field :value="marketsParams.Weex.sellFree" prefix="卖出费率"></v-text-field>
                                    </v-flex>
                                </v-layout>
                            </v-card-text>
                        </v-card>
                    </v-expansion-panel-content>

                    <v-expansion-panel-content>
                        <div slot="header">ZB</div>
                        <v-card>
                            <v-card-text>
                                <v-layout row wrap>
                                    <v-flex offset-xs1 xs8>
                                        <v-text-field :v-model="marketsParams.ZB.accesskey" prefix="accesskey"></v-text-field>
                                    </v-flex>
                                    <v-flex offset-xs1 xs8>
                                        <v-text-field :value="marketsParams.ZB.czFree" prefix="充值费率"></v-text-field>
                                    </v-flex>
                                    <v-flex offset-xs1 xs8>
                                        <v-text-field :value="marketsParams.ZB.tqFree" prefix="提取费率"></v-text-field>
                                    </v-flex>
                                    <v-flex offset-xs1 xs8>
                                        <v-text-field :value="marketsParams.ZB.buyFree" prefix="买入费率"></v-text-field>
                                    </v-flex>
                                    <v-flex offset-xs1 xs8>
                                        <v-text-field :value="marketsParams.ZB.sellFree" prefix="卖出费率"></v-text-field>
                                    </v-flex>
                                </v-layout>
                            </v-card-text>
                        </v-card>
                    </v-expansion-panel-content>
                    <v-expansion-panel-content>
                        <div slot="header">OKEX</div>
                        <v-card>
                            <v-card-text>
                                <v-layout row wrap>
                                    <v-flex offset-xs1 xs8>
                                        <v-text-field v-model="marketsParams.OKEX.apiKey" prefix="API"></v-text-field>                                     
                                    </v-flex>
                                    <v-flex offset-xs1 xs8>
                                        <v-text-field :value="marketsParams.OKEX.czFree | money" prefix="充值费率%"></v-text-field>
                                    </v-flex>
                                    <v-flex offset-xs1 xs8>
                                        <v-text-field :value="marketsParams.OKEX.tqFree" prefix="提取费率"></v-text-field>
                                    </v-flex>
                                    <v-flex offset-xs1 xs8>
                                        <v-text-field :value="marketsParams.OKEX.buyFree" prefix="买入费率"></v-text-field>
                                    </v-flex>
                                    <v-flex offset-xs1 xs8>
                                        <v-text-field :value="marketsParams.OKEX.sellFree" prefix="卖出费率"></v-text-field>
                                    </v-flex>
                                </v-layout>
                            </v-card-text>
                        </v-card>
                    </v-expansion-panel-content>

                </v-expansion-panel>
            </v-flex>
            <v-flex xs1> <v-btn class="info" @click="save">更新<v-icon>sync</v-icon></v-btn></v-flex>
        </v-layout>





    </v-app>




</template>
<script>
export default {
  data(){
      return {
          marketsParams:{}
      }
  },
  mounted(){
       console.log("this.$store.state",this.$store)
  },
  created(){
      var params = JSON.stringify(this.$store.state.price.marketsParams)
      
      
      this.marketsParams = JSON.parse(params)
  },
  methods:{
      save(){
          console.log("this.marketsParams",this.marketsParams.OKEX.apiKey)
          this.$store.commit('SAVE_MARKETS_PARAMS',JSON.parse(JSON.stringify(this.marketsParams)))
      }
  }
}
</script>
