<script setup>
import q from "@/data/quizes.json";
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import Question from "@/components/Question.vue";
import QuizHeader from "@/components/QuizHeader.vue";
import Summary from "@/components/Summary.vue";

const route = useRoute();
const quiz = ref(q.filter((quiz) => quiz.id.toString() === route.params.id)[0]);
const progress = ref(0);
const score = ref(0);
const isFinished = computed(
    () => quiz.value.questions.length == progress.value
);

const progressBar = computed(
    () => `${Math.floor((progress.value / quiz.value.questions.length) * 100)}%`
);

function checkAnswer(option) {
    if (option.isCorrect) {
        score.value++;
    }
    progress.value++;
}
</script>
<template>
    <QuizHeader :title="quiz.name" :progress-bar="progressBar" />
    <div>
        <Question
            v-if="!isFinished"
            :question="quiz.questions[progress]"
            @check-answer="checkAnswer"
        />
        <Summary
            v-if="isFinished"
            :score="`${score} / ${quiz.questions.length}`"
        />
    </div>
</template>
