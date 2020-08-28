<template>
  <div class="container">
    <div class="row pt-4">
        <Stock v-for="stock in stocks" :key="stock" class=" mb-3" :stock="stock"/>
    </div>
  </div>
</template>

<script>
import Stock from '@/components/stock-trade/portfolio/Stock.vue'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      stocks: 'stockPortfolio'
    })
  },
  components: {
    Stock
  }
}
</script>
