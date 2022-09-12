<template>
    <div v-if="isLoading">Fetching Data</div>
    <ul v-else-if="todos.length">
        <li v-for="(todo,index) in todos" :key="index" @click="fetchTODO(index)">
            {{todo.title}}
        </li>
    </ul>

    <div v-else> No todo Available</div>
</template>
<script>
import { onMounted, ref } from "vue";
import axios from "axios";

import { useRouter } from 'vue-router'

import BASE_URL from "@/BASE_URL"
export default {
    name: "TodoList",
    setup() {
        const todos = ref([]);
        // const todo = ref(null);
        const isLoading = ref(true);
        const router = useRouter();
        const fetchTODOs = async () => {
            try {
                isLoading.value = true;
                const response = await axios.get(`${BASE_URL}`);
                todos.value = response.data;
            } catch (error) {
                window.alert("Failed to fetch data")
                todos.value = [];
            } finally {
                isLoading.value = false;
            }
        }

        const fetchTODO = async (todoIndex) => {
            // const response = await axios.get(`${BASE_URL}/${todoIndex}`);
            // console.log("REsponse for single todo :>>", response.data)
            router.push(`/todo/${todoIndex}`)
        }
        onMounted(() => {
            fetchTODOs()
        })

        return {
            todos: todos,
            isLoading,
            fetchTODO
        }
    }
}
</script>