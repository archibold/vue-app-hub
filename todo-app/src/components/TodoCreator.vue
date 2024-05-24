<script setup>
import { ref } from 'vue'
const emit = defineEmits(['addTodo'])

const todo = ref('')
function addTodo() {
  emit('addTodo', todo.value)
  todo.value = ''
}
</script>

<template>
  <div class="input-wrap">
    <input type="text" v-model="todo" />
    <button @click="addTodo">Create</button>
  </div>
</template>
