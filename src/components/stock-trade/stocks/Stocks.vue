<template>
  <div class="container">
    <div class="row pt-4">
      <Stock v-for="stock in stocks" :key="stock" class=" mb-3" :stock="stock"/>
    </div>
    <!-- <div class="row">
      <div class="col-xs-12">
        <router-view/>
      </div>
    </div> -->
  </div>
</template>
<script>
import Stock from '@/components/stock-trade/stocks/Stock.vue'
export default {
  // data () {
  //   return {
  //     stocks: [

  //     ]
  //   }
  // },
  components: {
    Stock
  },
  computed: {
    stocks () {
      return this.$store.getters.stocks
    }
  }
}
</script>

<style lang="css" scoped>
  .pull-left {
    flex-basis: 40% !important;
    justify-content: left !important;
  }

  .pull-right {
    justify-content: right !important;
  }

  .qua {
    display: inline-flex !important;
  }
</style>
