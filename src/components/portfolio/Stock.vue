<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-danger">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }}
          <small>(Price:{{ stock.price }} |  Quantity:{{ stock.quantity }})</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input type="number"
                 class="form-control"
                 placeholder="数量"
                 v-model="quantity">
        </div>
        <div class="pull-right">
          <button
            :disabled=" this.quantity<=0 || disableSell"
            class="btn btn-danger"
            @click="toSellStocks"
          >{{disableSell?"No enough":"SELL"}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    props: ['stock'],
    data(){
      return {
        quantity: 0.0
      }
    },
    computed:{
      disableSell(){
        return this.quantity > Number(this.stock.quantity);
      }
    },
    methods:{
      ...mapActions({
        sell:'sellStocks'
      }),
      toSellStocks(){
        const order = {
          quantity: this.quantity,
          stockPrice: this.stock.price,
          stockId: this.stock.id,
        };
        this.sell(order)
      }
    }
  }
</script>

<style scoped>

</style>
