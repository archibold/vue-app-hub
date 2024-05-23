<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
    <header>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/about">About</RouterLink>
    </header>
    <div class="container">
        <RouterView />
    </div>
</template>
<style>
.container {
    max-width: 1000px;
    margin: 0 auto;
}
</style>
