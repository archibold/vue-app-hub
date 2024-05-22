<script setup>
defineProps(["question"]);
defineEmits("checkAnswer");
</script>
<template>
    <div class="question-container">
        <h1 class="question">{{ question.text }}</h1>
        <div class="answer-container">
            <div
                class="option"
                v-for="option in question.options"
                :key="option.id"
                @click="$emit('checkAnswer', option)"
            >
                <p class="label">{{ option.label }}</p>
                <div class="value">
                    <p>{{ option.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
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
</style>
