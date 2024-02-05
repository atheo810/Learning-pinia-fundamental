import { defineStore } from "pinia";

export const UseTodoListStore = defineStore("todoList", {
  // state untuk menyatakan perintah
  state: () => ({
    todoList: [],
    id: 0,
  }),
  //   action untuk mengubah state
  actions: {
    addTodo(item) {
      this.todoList.push({ item, id: this.id++, completed: false });
    },
    deleteTodo(itemId) {
      this.todoList.filter((object) => {
        return object.id !== itemId;
      });
    },
    toggleCompleted(idToFind) {
      const todo = this.todoList.find((obj) => obj.id === idToFind);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});
