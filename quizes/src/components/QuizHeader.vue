<script setup>
defineProps(["title", "progressBar"]);
</script>
<template>
    <header>
        <h4>{{ title }}</h4>
        <div class="bar">
            <div class="completion" :style="{ width: progressBar }"></div>
        </div>
    </header>
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
</style>
