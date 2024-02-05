<script setup>
import TodoForm from "@/components/TodoForm.vue";
import TodoList from "@/components/TodoList.vue";
</script>

<template>
  <div class="todo-app">
    <h1>Todo List App</h1>
    <TodoForm />
    <TodoList />
  </div>
</template>

<style scoped>
.todo-app {
  padding: 5vh;
  min-height: 100vh;
  width: 30vw;
  background-color: #f7f9fc;
}
</style>
