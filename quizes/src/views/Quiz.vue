<script setup>
import q from "@/data/quizes.json";
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const quiz = ref(q.filter((quiz) => quiz.id.toString() === route.params.id)[0]);
const progress = ref(0);
const question = ref(quiz.value.questions[0]);
const score = ref(0);
const isFinished = computed(
    () => quiz.value.questions.length == progress.value
);

function checkAnswer(option) {
    if (option.isCorrect) {
        score.value++;
    }
    progress.value++;
    if (!isFinished.value) {
        question.value = quiz.value.questions[progress.value];
    }
}
</script>
<template>
    <header>
        <h4>{{ quiz.name }}</h4>
        <div class="bar">
            <div
                class="completion"
                :style="{
                    width: `${Math.floor(
                        (progress / quiz.questions.length) * 100
                    )}%`,
                }"
            ></div>
        </div>
    </header>
    <div>
        <div v-if="!isFinished" class="question-container">
            <h1 class="question">{{ question.text }}</h1>
            <div class="answer-container">
                <div
                    class="option"
                    v-for="option in question.options"
                    :key="option.id"
                    @click="checkAnswer(option)"
                >
                    <p class="label">{{ option.label }}</p>
                    <div class="value">
                        <p>{{ option.text }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="isFinished" class="game-over">
            <div>
                <h1>Your score</h1>
                <h2>{{ score }} / {{ quiz.questions.length }}</h2>
                <RouterLink to=".."> Go Back</RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
header {
    margin-top: 20px;
}
header h4 {
    font-size: 2.5rem;
}

.bar {
    width: 300px;
    height: 50px;
    border: 3px solid yellowgreen;
}

.completion {
    height: 100%;
    background-color: yellowgreen;
    transition: width 1s ease-in;
}

.question-container {
    margin-top: 20px;
}

.question {
    font-size: 2rem;
    margin-bottom: 20px;
}

.option {
    display: flex;
    margin-bottom: 20px;
    cursor: pointer;
}

.option .label {
    background-color: yellowgreen;
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.option .value {
    width: 100%;
    font-size: 1.5rem;
    padding: 0 20px;
    height: 50px;
    display: flex;
    align-items: center;
}

.game-over {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
}
</style>
