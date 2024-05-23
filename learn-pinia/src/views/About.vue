<script setup>
import { useCounterStore } from "@/stores/counter";

const store = useCounterStore();
</script>
<template>
    <div class="about">
        <h1>About</h1>
        <p>{{ store.counter }}</p>
    </div>
</template>
