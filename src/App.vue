<template>
  <div id="app">
    <Header />
    <Tab />
    <keep-alive>
      <router-view />
    </keep-alive>
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
