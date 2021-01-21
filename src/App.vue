<template>
  <div id="app">
    <Header />
    <Tab />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header'
import Tab from './components/Tab'

export default {
  name: 'App',
  components: { Header, Tab }
}
</script>
