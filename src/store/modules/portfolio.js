const state = {
  funds: 10000,
  stocks:[]
};

const mutations = {
  'BUY_STOCKS'(state, {stockId, stockPrice, quantity}){
    console.log("Buy_Stock");
    const record = state.stocks.find(element => element.id == stockId);
    console.log(`record is ${record}`);
    if(record){
      record.quantity = Number(quantity)+Number(record.quantity);
      console.log('record.quantity += quantity;')
    }else {
      state.stocks.push({
        id:stockId,
        quantity:quantity
      });
      console.log(state.stocks);
    }
    state.funds -= stockPrice*quantity
  },
  'SELL_STOCKS'(state, {stockId, stockPrice, quantity}) {
    console.log("Sell_Stocks");
    const record = state.stocks.find(element => element.id == stockId);
    if (record.quantity > quantity){
      record.quantity = Number(record.quantity) - Number(quantity);
    }else {
      state.stocks.splice(state.stocks.indexOf(record),1)
    }
    state.funds += stockPrice*quantity
  }
};

const actions = {
  sellStocks({commit},order){
    commit('SELL_STOCKS',order)
  }
};

const getters = {
  funds(state){
    return state.funds
  },
  stockPortfolio(state, getters){
    return state.stocks.map(stock => {
      const record = getters.stocks.find(element => element.id === stock.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      }
    })
  }
};

export default {
  getters,
  mutations,
  actions,
  state
}
