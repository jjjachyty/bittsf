import axios from 'axios'

const state = {
    marketsTop3:new Array(),
    marketsLow3:new Array(),
    usdtExchange:0,
    refreshTime:10,
    marketsParams:{
        BitAsiaEx:{name:'BitAsiaEx',api:'',czFree:0,tqFree:0,buyFree:0,sellFree:0},
        Weex:{name:'Weex',authorization:'',czFree:0,tqFree:0,buyFree:0,sellFree:0},
        ZB:{name:'ZB',accesskey:'',czFree:0,tqFree:0,buyFree:0,sellFree:0},
        OKEX:{name:'ZB',apiKey:'',czFree:0,tqFree:0,buyFree:0,sellFree:0}
    }

}

const mutations = {
    SET_MARKETS_TOP3(state,{dispatch,marketCoins}) {
        var length = marketCoins.length
        state.marketsTop3=[]
        state.marketsLow3=[]
        state.marketsTop3.push(marketCoins[1])
        state.marketsTop3.push(marketCoins[2])
        state.marketsTop3.push(marketCoins[3])
        state.marketsLow3.push(marketCoins[length-1])
        state.marketsLow3.push(marketCoins[length-2])
        state.marketsLow3.push(marketCoins[length-3])
    },
    SET_USDT_EXCHANGE(state,exchange) {
        state.usdtExchange = exchange
        state.marketsParams.OKEX.czFree = (exchange-6.29)/6.29*100
    },
    SAVE_MARKETS_PARAMS(state,mp){
        console.log("SAVE_MARKETS_PARAMS",mp)
        state.marketsParams = mp
    }
}

const getters = {
    GetMarketsTop3 :state=> state.marketsTop3,
    GetMarketsLow3 :state=> state.marketsLow3,
    GetUsdtExchange :state=> state.usdtExchange,
    GetMarketsParams: state => state.marketsParams,
}
const actions = {
    getBTCPrice({ commit,state,dispatch }) {
        axios.post("http://www.bitkan.com/price/w_price", { 'categoryId': 'btc' }).then((res) => {
            var marketCoins = res.data.data.marketCoins

            marketCoins.sort(function(obj1,obj2){
                var val1 = obj1.price[0][4];
                var val2 = obj2.price[0][4];
                return    val2 - val1
            })
            commit('SET_MARKETS_TOP3',{dispatch,marketCoins})
        }).catch((rep)=>{
            Promise.reject(rep);
            console.log("error",rep)
        })
    },
    getOkexUSDT({ commit,state }) {
        var header = {"authorization":"eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJkYjBlZWRhOS03NGM3LTRmNzItYmRhYi03NTNhNmZkYjJiZTZNbUlsIiwidWlkIjoiK2xYNlFPWUswZTM5SmZvSTNmdjM2QT09Iiwic3ViIjoiMTU1KioqMDAwOSIsImVtbCI6ImpqamFjaHl0eUAxNjMuY29tIiwic3RhIjowLCJtaWQiOjAsImlhdCI6MTUyNDcxMDE3OSwiZXhwIjoxNTI1MzE0OTc5LCJpc3MiOiJva2NvaW4ifQ.NVg_xJrrQEaCB5weUb7dy7N9rMeaT_Q_sbcbyNqbsUYuEz-su_cNRXxz9_-IDCj6A1InxftRPz2L9tasnaG2PA"}
        axios.get("https://www.okex.com/v2/c2c-open/tradingOrders/group?digitalCurrencySymbol=usdt&legalCurrencySymbol=cny&best=0&exchangeRateLevel=0&paySupport=0", {headers:header }).then((res) => {
            console.log(new Date(),"getOkexUSDT",res.data.data.sellTradingOrders[19].exchangeRate)

            commit('SET_USDT_EXCHANGE',res.data.data.sellTradingOrders[19].exchangeRate)

        }).catch((rep)=>{
            
            console.log("error",rep)
        })
    },
}

export default {
    state,
    mutations,
    actions,
    getters
}