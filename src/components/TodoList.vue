<script setup>
// import store
import { UseTodoListStore } from "@/stores/todoList";
// import from pinia to make store to became reactive state
import { storeToRefs } from "pinia";

// define UseTodoListStore
const store = UseTodoListStore();
// make store to ref
const { todoList } = storeToRefs(store);

const { toggleCompleted, deleteTodo } = store;
</script>

<template>
  <div v-for="todo in todoList" :key="todo.id" class="item">
    <div class="content">
      <span :class="{ completed: todo.completed }">{{ todo.item }}</span>
      <div>
        <span @click.stop="toggleCompleted(todo.id)">&#10004;</span>
        <span @click="deleteTodo(todo.id)">&#10060;</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
span {
  margin: 0 10px;
  cursor: pointer;
}
.item {
  display: flex;
  justify-content: center;
}
.content {
  display: flex;
  font-size: 1.5em;
  justify-content: space-between;
  width: 80vw;
  padding: 5px;
}
.completed {
  text-decoration: line-through;
}
</style>
