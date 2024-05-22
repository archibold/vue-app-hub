<script setup>
defineProps(["score"]);
</script>
<template>
    <div class="game-over">
        <div>
            <h1>Your score</h1>
            <h2>{{ score }}</h2>
            <RouterLink to=".."> Go Back</RouterLink>
        </div>
    </div>
</template>
<style scoped>
.game-over {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
}
</style>
