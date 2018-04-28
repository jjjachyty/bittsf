<template>
<v-app>
  <div>
    <v-toolbar color="cyan" dark tabs >
      <v-toolbar-title>BTCTSF</v-toolbar-title>
        <span>专业版 </span>
        <v-spacer></v-spacer>
        <span>软件支持 微信：hyh5290604</span>

      <v-tabs
        centered
        color="cyan"
        slot="extension"
        slider-color="yellow"
        v-model="model"
        fixed-tabs
      >
        <v-tab
          href="#monitor"
        >
          价格监控
        </v-tab>
                <v-tab
          href="#api"
        >
          交易平台设置
        </v-tab>
                        <v-tab
        href="#auto"
        >
          自动交易规则设置
        </v-tab>
                       <v-tab
        href="#vpn"
        >
          VPN设置
        </v-tab>



      </v-tabs>
    </v-toolbar>
    <v-tabs-items v-model="model">
        <v-tab-item id="monitor">
                    <Monitor></Monitor>
        </v-tab-item>
        <v-tab-item id="api">
                    <Api></Api>
        </v-tab-item>
    </v-tabs-items>
  </div>
   
           <v-footer>
             <v-layout>
               <v-flex class="text-xs-center">软件支持 微信：hyh5290604</v-flex>
             </v-layout>
           </v-footer>
           </v-app>
</template>

<script>
import Monitor from '@/components/MainView.vue'
import Api from '@/components/APIView.vue'

  export default {
    name: 'btctsf',
    components:{
      Monitor,
      Api
    },
    data: () => ({
      model:"monitor",
      items: [
        { icon: 'apps', title: 'Welcome', to: '/' },
        { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    })
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons');
  /* Global CSS */
</style>
