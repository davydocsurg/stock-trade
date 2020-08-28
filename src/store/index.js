import Vue from 'vue'
import Vuex from 'vuex'
import stocks from './modules/stocks'
import portfolio from './modules/portfolio'
import * as actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  // state: {
  //   funds: 10000,
  //   stocks: []
  // },
  // mutations: {
  //   'SET_STOCKS' (state, stocks) {
  //     state.stocks = stocks
  //   },
  //   'RND_STOCKS' (state) {

  //   },
  //   'BUY_STOCK' (state, { stockId, quantity, stockPrice }) {
  //     const record = state.stocks.find(element => element.id === stockId)
  //     if (record) {
  //       record.quantity += quantity
  //     } else {
  //       state.stocks.push({
  //         id: stockId,
  //         quantity: quantity
  //       })
  //     }
  //     state.funds -= stockPrice * quantity
  //   },
  //   'SELL_STOCK' (state, { stockId, quantity, stockPrice }) {
  //     const record = state.stocks.find(element => element.id === stockId)
  //     if (record.quantity > quantity) {
  //       record.quantity -= quantity
  //     } else {
  //       state.stocks.splice(state.stocks.indexOf(record))
  //     }
  //     state.funds += stockPrice * quantity
  //   }
  // },
  // actions: {
  //   buyStock: ({ commit }, order) => {
  //     commit('BUY_STOCK', order)
  //   },
  //   sellStock: ({ commit }, order) => {
  //     commit('SELL_STOCK', order)
  //   },
  //   initStocks: ({ commit }) => {
  //     commit('SET_STOCKS', stocks)
  //   },
  //   randomizeStocks: ({ commit }) => {
  //     commit('RND_STOCKS')
  //   }
  // },
  // getters: {
  //   stocks: state => {
  //     return state.stocks
  //   },
  //   stockPortfolio (state, getters) {
  //     return state.stocks.map(stock => {
  //       const record = getters.stocks.find(element => element.id === stock.id)
  //       return {
  //         id: stock.id,
  //         quantity: stock.quantity,
  //         name: record.name,
  //         price: record.price
  //       }
  //     })
  //   },
  //   funds (state) {
  //     return state.funds
  //   }
  // },
  // main
  modules: {
    stocks,
    portfolio
  }
})
