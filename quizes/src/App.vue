<script setup>
import q from "./data/quizes.json";
import { ref, computed } from "vue";
import Card from "./components/Card.vue";

const quizes = ref(q);
const search = ref("");
const filtredQuizes = computed(() =>
    quizes.value.filter((quiz) =>
        quiz.name.toLowerCase().startsWith(search.value.toLowerCase())
    )
);
</script>
<template>
    <div class="container">
        <header>
            <h1>Quizes</h1>
            <input v-model.trim="search" type="text" placeholder="Search..." />
        </header>
        <div class="option-container">
            <Card :quiz v-for="quiz in filtredQuizes" :key="quiz.id" />
        </div>
    </div>
</template>

<style scoped>
.container {
    max-width: 1000px;
    margin: 0 auto;
}

.option-container {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    margin-top: 40px;
}

header {
    margin-bottom: 10px;
    margin-top: 30px;
    display: flex;
    align-items: center;
}

header h1 {
    font-weight: bold;
    margin-right: 30px;
}

header input {
    border: none;
    background-color: rgba(128, 128, 128, 0.1);
    padding: 10px;
    border-radius: 5px;
    font-size: 20px;
    color: aliceblue;
}
</style>
