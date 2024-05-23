<script setup>
import { useCounterStore } from "@/stores/counter";

const store = useCounterStore();

function increase() {
    store.increment();
}

function decrease() {
    store.decrement();
}
</script>

<template>
    <div class="home">
        <div class="counter">{{ store.counter }}</div>
        <div class="buttons">
            <button @click="decrease">-</button>
            <button @click="increase">+</button>
        </div>
        <div>{{ store.oddOrEven }}</div>
    </div>
</template>
