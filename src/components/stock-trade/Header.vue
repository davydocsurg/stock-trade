<template>
  <div class="header">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark shadow-lg">
      <div class="container">
        <router-link to="/" class="navbar-brand rt">Stock Trader</router-link>

          <ul class="nav navbar-nav">

          </ul>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="">
              <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <!-- Left Side Of Navbar -->
          <ul class="navbar-nav nav mr-auto">
            <router-link to="/portfolio" activeClass="active" tag="li"><a class="nav-link rt">Porfolio</a></router-link>
            <router-link to="/stocks" activeClass="active" tag="li"><a class="nav-link rt">Stocks</a></router-link>
          </ul>

                    <!-- Right Side Of Navbar -->
                <ul class="navbar-nav ml-auto">
                  <li><a href="#" class="nav-link navbar-right" @click="endDay">End Day</a></li>
                    <!-- <li class="nav-item dropdown"
                      :class="{ open: isDropdownOpen }"
                      @click="isDropdown"
                    >
                      <a class="nav-link dropdown-toggle"
                        href="#" role="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false"
                      >
                        Save & Load <span class="caret"></span>
                      </a> -->

                      <!-- <div class="dropdown-menu dropdown-menu-right"> -->
                        <li><a href="#" class="nav-link" @click="saveData">Save Data</a></li>
                        <li><a href="#" class="nav-link" @click="loadData">Load Data</a></li>>
                      <!-- </div> -->
                    <!-- </li> -->
                <strong class="navbar-text navbar-right">Funds: {{ funds | currency }}</strong>
                </ul>
            </div>
        </div>
    </nav>

  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      isDropdownOpen: false
    }
  },
  computed: {
    funds () {
      return this.$store.getters.funds
    }
  },
  methods: {
    ...mapActions({
      randomizeStocks: 'randomizeStocks',
      fetchData: 'loadData'
    }),
    endDay () {
      this.randomizeStocks()
    },
    saveData () {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      }
      this.$http.put('data.json', data)
    },
    loadData () {
      this.fetchData()
    }
  }
}
</script>

<style lang="css" scoped>
  .rt {
    cursor: pointer !important;
  }
</style>
