<script setup>
import { ref } from "vue";
import { UseTodoListStore } from "@/stores/todoList";

// reactive state
const todo = ref("");

// use store in UseTodoListStore
const store = UseTodoListStore();

function addItemAndClear(item) {
  if (item.length === 0) {
    return;
  }
  store.addTodo(item);
  todo.value = "";
}
</script>

<template>
  <div>
    <form @submit.prevent="addItemAndClear(todo)">
      <input type="text" v-model="todo" />
      <button>Add</button>
    </form>
  </div>
</template>

<style scoped></style>
