import axios from 'axios'


const state = {
    apis: {
        Weex: { access_id: 'e07e6ae5-2829-4d81-8121-a36492d102b9', secret_key: '80DFCA087A4F4D2EBE10E91C1C6C8C5EE1AB7333E3A1B07EC4' }
    }
}

const mutations = {
    SET_MARKETS_TOP3(state, { dispatch, marketCoins }) {
        var length = marketCoins.length
        state.marketsTop3 = []

    },
    SET_USDT_EXCHANGE(state, exchange) {
        state.usdtExchange = exchange
        state.marketsParams.OKEX.czFree = (exchange - 6.29) / 6.29 * 100
    },
    SAVE_MARKETS_PARAMS(state, mp) {
        console.log("SAVE_MARKETS_PARAMS", mp)
        state.marketsParams = mp
    }
}

const getters = {

}
const actions = {
    Weex({ commit, state, dispatch }, { type }) {
        //卖出
        if (type == 'sell') {



            var head = { 'authorization': md5(postData) }

            axios.get('https://api.weex.com/v1/balance/?access_id=').then(() => {

            })

            var postData = {
                "access_id": "	BFFA64957AA240F6BBEA26F4E07EC0D9",
                "amount": "56.5", // 委托数量
                "price": "7000", // 委托价格
                "type": "sell", // 订单类型
                "market": "BTCUSD", // 市场类型
                "source_id": "123" //用户自定义编号并且返回
            }


            axios.post("https://api.weex.com/v1/order/limit", { 'categoryId': 'btc' }).then((res) => {
                var marketCoins = res.data.data.marketCoins

                marketCoins.sort(function(obj1, obj2) {
                    var val1 = obj1.price[0][4];
                    var val2 = obj2.price[0][4];
                    return val2 - val1
                })
                commit('SET_MARKETS_TOP3', { dispatch, marketCoins })
            }).catch((rep) => {
                Promise.reject(rep);
                console.log("error", rep)
            })

            //买入
        } else {



        }





    },
}

export default {
    state,
    mutations,
    actions,
    getters
}