<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }}
          <small>(Price:{{ stock.price }})</small>
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
            :disabled=" this.quantity<=0 || insufficient"
            class="btn btn-success"
            @click="buy"
          >{{insufficient?"No Money":"BUY"}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';
  export default {
    props: ['stock'],
    data(){
      return {
        quantity: 0.0
      }
    },
    computed:{
      insufficient(){
        return !(this.stock.price * this.quantity < this.funds);
      },
      funds(){
        return this.$store.getters.funds;
      }
    }
    ,
    methods:{
      ...mapActions([
        ''
      ]),
      buy(){
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        };
        this.$store.dispatch('buyStock',order);
        this.quantity = 0;
      }
    }
  }
</script>

<style scoped>

</style>
