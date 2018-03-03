<template>
  <div id='hello'>
    <Header/>
    <Todo/>
    <Footer/>
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import Todo from './Todo.vue'

export default {
  data () {
    return {
      msg: 'here is the content'
    }
  },
  components: {
    Header,
    Footer,
    Todo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
