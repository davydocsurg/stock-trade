<template>
  <div class="col-sm-6 col-md-4">
    <div class="card">
      <div class="card-header bg-info text-white text-left">
        <b class="card-title">
          {{ stock.name }}
          <small>(Price: {{ '$' + stock.price }} | {{ stock.quantity }})</small>
        </b>
      </div>
      <div class="card-body d-flex">
        <div class="float-left mr-4">
          <input type="number" class="form-control"
            placeholder="Quantity" v-model="quantity"
            :class="{ danger: quantityExceeded }"
          >
        </div>
        <div class="float-right">
          <button class="btn btn-info mr-4"
            @click="sellStock"
            :disabled="quantityExceeded || quantity <= 0"
            :class="{ 'btn-danger': quantityExceeded }"
          >{{ quantityExceeded ? 'Exceeded' : 'Sell' }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['stock'],
  data () {
    return {
      quantity: 0
    }
  },
  computed: {
    quantityExceeded () {
      return this.quantity > this.stock.quantity
    }
  },
  methods: {
    ...mapActions({
      placeSaleOrder: 'sellStock'
    }),
    sellStock () {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }
      this.placeSaleOrder(order)
      this.quantity = 0
    }
  }
}
// || !Number.isInteger(quantity)
</script>

<style lang="css" scoped>
  .danger {
    border: 1px solid red;
  }
</style>
