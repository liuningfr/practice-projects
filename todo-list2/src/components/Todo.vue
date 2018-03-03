<template>
  <section class="real-app">
      <input type="text" class="add-input" 
      autofocus='autofocus' placeholder="接下去要做什么？"
      @keyup.enter="addTodo"
      >
      <Item 
      :todo="todo"
      v-for="todo in filteredTodos"
      :key="todo.id"
      />
      <Tabs 
      :filter="filter"
      :todos="todos"
      @del="deleteAll"
      @toggle="toggleFilter"
      />
  </section>
</template>

<script>
import Item from './Item.vue'
import Tabs from './Tabs.vue'

let id = 0
export default {
    data() {
      return {
        todos: [],
        filter: 'all',
      }
    },
    methods: {
      addTodo: function (e) {
        this.todos.unshift({
          id: id ++,
          content: e.target.value.trim(),
          completed: false 
        })
        e.target.value = ''
      },
      deleteAll: function () {
        this.todos = this.todos.filter(todo => !todo.completed)
      },
      toggleFilter: function (state) {
        this.filter = state
      }
    },
    components: {
      Item,
      Tabs,
    },
    computed: {
      filteredTodos() {
        if (this.filter === 'all') {
          return this.todos
        }
        const completed = this.filter === 'completed'

        return this.todos.filter(todo => completed === todo.completed)

      }
    }

}
</script>

<style lang="stylus" scoped>
  
  .real-app {
    width 600px
    margin 0px  auto
    padding-left 8px
    box-shadow 0px 0px 5px #666
  }

  .add-input {
    positon:relative;
    margin 0px
    width 100%
    height 20px
    font-size 18px
    font-family  inherit 
    font-weight inherit
    line-height 1.4rem
    border 0;
    outline none 
    color inherit
    border 1px solid #999
    box-shadow: inset 0 -1px 5px 0px rgba(0,0,0,0)
    box-sizing border-box
    font-smoothing:antialiased;
    padding 16px 16px 16px 16px
    border none 
  }
  
</style>

