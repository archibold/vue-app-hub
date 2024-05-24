import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todoList: []
  }),
  getters: {},
  actions: {
    addTodo(todo) {
      this.todoList.push(todo)
    }
  }
})
