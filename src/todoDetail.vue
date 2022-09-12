<template>
    <div>
        <h1>detail</h1>
        <div><label for="id">Id:</label><span>{{todoData.id}}</span></div>
        <div><label for="Title">Title:</label><span>{{todoData.title}}</span></div>
    </div>
</template>
<script>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from 'vue-router'
import BASE_URL from "@/BASE_URL";
export default {
    name: 'todoDetail',
    setup() {
        const todoData = ref([]);
        const route = useRoute()

        const fetchTodoData = async () => {
            const indexValue = route.params.id;
            //   console.log("gfzf", route.params.id)

            const response = await axios.get(`${BASE_URL}/${indexValue}`);
            todoData.value = response.data;
            // console.log("REsponse for single todo data:>>", todoData.value);

        }
        onMounted(() => {
            fetchTodoData()
        })
        return {
            todoData: todoData,
            fetchTodoData
        }
    }
}
</script>