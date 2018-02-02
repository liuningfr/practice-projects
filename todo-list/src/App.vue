<template>
  <div id="app">
    <h1 v-text="title"></h1>
    <input v-model="newItem" v-on:keyup.enter="addNew" placeholder="在这里输入你想做的事情"/>
    <ul>
      <li v-for="item in items" :class="{finished: item.isFinished}" 
        v-on:click="toggleFinish(item)">
        {{item.lable}}
      </li>
    </ul>
    <!-- <component-a></component-a> -->
  </div>
</template>

<script>
import Store from './store'
import ComponentA from './components/componentA'

export default {
  data() {
    return {
      title: 'Todo List',
      items: Store.fetch(),
      newItem: ''
    }
  },
  components: {ComponentA},
  watch: {
    items: {
      handler: function(items) {
        Store.save(items);
      },
      deep: true
    }
  },
  methods: {
    toggleFinish: function(item) {
      item.isFinished = !item.isFinished;
    },
    addNew: function() {
      this.items.push({
        lable: this.newItem,
        isFinished: false
      });
      this.newItem = '';
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.finished {
  text-decoration:line-through;
}
li {
  list-style-type: none;
  font-size: 24px;
}
ul {
  position: relative;
  left: -20px;
}
input {
  width: 250px;
  height: 25px;
}
</style>
