<script setup>
import { reactive } from 'vue'
import TodoCreator from '@/components/TodoCreator.vue'
const todo = reactive([])
</script>

<template>
  <main>
    <h1>Create Todo</h1>
    <TodoCreator
      @add-todo="
        (t) => {
          console.log(t)
          todo.push(t)
        }
      "
    />
    <ul>
      <li v-for="t in todo" :key="t">{{ t }}</li>
    </ul>
  </main>
</template>
