<script setup>
import { useRouter } from "vue-router";
const { quiz } = defineProps(["quiz"]);

const router = useRouter();

const navigateToQuiz = () => {
    router.push(`quiz/${quiz.id}`);
};
</script>

<template>
    <div @click="navigateToQuiz" class="card">
        <img :src="quiz.img" alt="" />
        <div class="card-text">
            <h2>{{ quiz.name }}</h2>
            <p>{{ quiz.questions.length }} questions</p>
        </div>
    </div>
</template>

<style>
.card {
    width: 310px;
    overflow: hidden;
    border-radius: 2%;
    box-shadow: 1px 1px 1px #aaa;
    margin-bottom: 35px;
    margin-top: 20px;
    cursor: pointer;
}

.card img {
    width: 100%;
    height: 190px;
    margin: 0;
}

.card .card-text {
    padding: 10px 5px;
}

.card .card-text h2 {
    font-weight: bold;
}
</style>
