<template>
  <div class="col-sm-6 col-md-4">
    <div class="card">
      <div class="card-header bg-success text-white text-left">
        <b class="card-title">
          {{ stock.name }}
          <small>(Price: {{ '$' + stock.price }})</small>
        </b>
      </div>
      <div class="card-body d-flex">
        <div class="float-left pr-2">
          <input type="number" class="form-control"
            placeholder="Quantity" v-model="quantity"
            :class="{ danger: insufficientFunds }"
            >
        </div>
        <div class="float-right">
          <button class="btn btn-success"
            @click="buyStock"
            :disabled="insufficientFunds || quantity <= 0"
            :class="{'btn-danger': insufficientFunds}"
          >{{ insufficientFunds ? 'Insufficient' : 'Buy'}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
//  || !Number.isInteger(quantity)
  props: ['stock'],
  data () {
    return {
      quantity: 0
    }
  },
  computed: {
    funds () {
      return this.$store.getters.funds
    },
    insufficientFunds () {
      return this.quantity * this.stock.price > this.funds
    }
  },
  methods: {
    buyStock () {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }
      console.log(order)
      this.$store.dispatch('buyStock', order)
      this.quantity = 0
    }
  }
}
</script>

<style lang="css" scoped>
  .danger {
    border: 1px solid red;
  }
</style>
