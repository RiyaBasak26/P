import { createWebHistory, createRouter } from "vue-router";
import TodoList from "@/Components/TodoList";
import todoDetail from "./todoDetail.vue";
const routes = [
  {
    path: "/",
    name: "Todos",
    component: TodoList,
  },
  {
    path: "/todo/:id",
    name: "todoDetail",
    component: todoDetail,
  },
];
const router = createRouter({ history: createWebHistory(), routes });
export default router;
