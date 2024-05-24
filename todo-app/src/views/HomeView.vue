<script setup>
import TodoCreator from '@/components/TodoCreator.vue'
import { useTodoStore } from '@/stores/todoStore'

const todoStore = useTodoStore()
</script>

<template>
  <main>
    <h1>Create Todo</h1>
    <TodoCreator
      @add-todo="
        (t) => {
          todoStore.addTodo(t)
        }
      "
    />
    <ul>
      <li v-for="t in todoStore.todoList" :key="t">{{ t }}</li>
    </ul>
  </main>
</template>
