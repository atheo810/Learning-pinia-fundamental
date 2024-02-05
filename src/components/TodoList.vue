<script setup>
// import store
import { UseTodoListStore } from "@/stores/todoList";
// import from pinia to make store to became reactive state
import { storeToRefs } from "pinia";

// define UseTodoListStore
const store = UseTodoListStore();
// make store to ref
const { todoList } = storeToRefs(store);

const { toggleCompleted } = store;
</script>

<template>
  <div v-for="todo in todoList" :key="todo.id" class="item">
    <div class="content">
      <span :class="{ completed: todo.completed }">{{ todo.item }}</span>
      <span @click.stop="toggleCompleted(todo.id)">&#10004;</span>
    </div>
  </div>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
